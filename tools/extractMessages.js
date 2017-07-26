const path = require('path');
const transform = require('babel-core').transform;
const readFile = require('./fs').readFile;
const writeFile = require('./fs').writeFile;
const glob = require('./fs').glob;

const GLOB_PATTERN = `${process.cwd()}/src/universal/features/**/*.{js,jsx}`;
const fileToMessages = {};
let messages = {};

const posixPath = (fileName) => fileName.replace(/\\/g, '/');

async function writeMessages(fileName, msgs) {
  await writeFile(fileName, `${JSON.stringify(msgs, null, 2)}\n`);
}

// merge messages to source files
async function mergeToFile(locale, toBuild) {
  const fileName = `${process.cwd()}/src/universal/features/language/translations/${locale}.json`;
  const originalMessages = {};
  try {
    const oldFile = await readFile(fileName);

    let oldJson;
    try {
      oldJson = JSON.parse(oldFile);
    } catch (err) {
      throw new Error(`Error parsing messages JSON in file ${fileName}`);
    }

    oldJson.forEach((message) => {
      originalMessages[message.id] = message;
      delete originalMessages[message.id].files;
    });
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }
  }

  Object.keys(messages).forEach((id) => {
    const newMsg = messages[id];
    originalMessages[id] = originalMessages[id] || {
      id,
    };
    const msg = originalMessages[id];
    msg.description = newMsg.description || msg.description;
    msg.defaultMessage = newMsg.defaultMessage || msg.defaultMessage;
    msg.message = msg.message || '';
    msg.files = newMsg.files;
  });

  const result = Object.keys(originalMessages).map((key) => originalMessages[key]).filter((msg) => msg.files || msg.message);

  await writeMessages(fileName, result);

  if (toBuild && locale !== '_default') {
    const buildFileName = `build/messages/${locale}.json`;
    try {
      await writeMessages(buildFileName, result);
    } catch (err) {
      console.error(`Failed to update ${buildFileName}`);
    }
  }
}

// call everytime before updating file!
function mergeMessages() {
  messages = {};
  Object.keys(fileToMessages).forEach((fileName) => {
    fileToMessages[fileName].forEach((newMsg) => {
      const message = messages[newMsg.id] || {};
      messages[newMsg.id] = {
        description: newMsg.description || message.description,
        defaultMessage: newMsg.defaultMessage || message.defaultMessage,
        message: newMsg.message || message.message || '',
        files: message.files ? [...message.files, fileName].sort() : [fileName],
      };
    });
  });
}

async function updateMessages(toBuild) {
  mergeMessages();
  const config = require(`${process.cwd()}/src/universal/appConfig`);
  await Promise.all(['_default', ...config.locale].map((locale) => mergeToFile(locale, toBuild)));
}

/**
 * Extract react-intl messages and write it to src/messages/_default.json
 * Also extends known localizations
 */
async function extractMessages() {
  const compare = (a, b) => {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  };

  const compareMessages = (a, b) => compare(a.id, b.id);

  const processFile = async (fileName) => {
    try {
      const code = await readFile(fileName);
      const posixName = posixPath(fileName);
      const result = transform(code, {
        presets: ['react', 'es2015', 'stage-2'],
        plugins: ['react-intl'],
      }).metadata['react-intl'];
      if (result.messages && result.messages.length) {
        fileToMessages[posixName] = result.messages.sort(compareMessages);
      } else {
        delete fileToMessages[posixName];
      }
    } catch (err) {
      console.error(`extractMessages: In ${fileName}:\n`, err.SyntaxError || err);
    }
  };

  const files = await glob(GLOB_PATTERN);
  await Promise.all(files.map(processFile));
  await updateMessages(false);
}

module.exports = extractMessages;
