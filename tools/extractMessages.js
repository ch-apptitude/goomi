const path = require('path');
const transform = require('babel-core').transform;
const readFile = require('./fs').readFile;
const writeFile = require('./fs').writeFile;
const glob = require('./fs').glob;

const GLOB_PATTERN = `${process.cwd()}/src/universal/features/**/*.{js,jsx}`;
const fileToMessages = {};
let messages = {};

const posixPath = fileName => fileName.replace(/\\/g, '/');

function writeMessages(fileName, msgs) {
  return writeFile(fileName, `${JSON.stringify(msgs, null, 2)}\n`);
}

// merge messages to source files
function mergeToFile(locale, toBuild) {
  const fileName = path.join(process.cwd(), 'src', 'universal', 'features', 'language', 'translations', `${locale}.json`);
  return readFile(fileName)
    .then(function(oldFile) {
      const originalMessages = {};
      let oldJson;
      try {
        oldJson = JSON.parse(oldFile);
      } catch (err) {
        throw new Error(`Error parsing messages JSON in file ${fileName}`);
      }

      oldJson.forEach(message => {
        originalMessages[message.id] = message;
        delete originalMessages[message.id].files;
      });

      Object.keys(messages).forEach(id => {
        const newMsg = messages[id];
        originalMessages[id] = originalMessages[id] || {
          id
        };
        const msg = originalMessages[id];
        msg.description = newMsg.description || msg.description;
        msg.defaultMessage = newMsg.defaultMessage || msg.defaultMessage;
        msg.message = msg.message || '';
        msg.files = newMsg.files;
      });

      const result = Object.keys(originalMessages)
        .map(key => originalMessages[key])
        .filter(msg => msg.files || msg.message);

      writeMessages(fileName, result).then(function() {
        if (toBuild && locale !== '_default') {
          const buildFileName = `build/messages/${locale}.json`;
          writeMessages(buildFileName, result)
            .then(function() {
              return Promise.resolve();
            })
            .catch(function(err) {
              console.error(`Failed to update ${buildFileName}`);
              return Promise.reject();
            });
        }
      });
    })
    .catch(function(err) {
      if (err.code !== 'ENOENT') {
        return Promise.reject(err);
      }
    });
}

// call everytime before updating file!
function mergeMessages() {
  messages = {};
  Object.keys(fileToMessages).forEach(fileName => {
    fileToMessages[fileName].forEach(newMsg => {
      const message = messages[newMsg.id] || {};
      messages[newMsg.id] = {
        description: newMsg.description || message.description,
        defaultMessage: newMsg.defaultMessage || message.defaultMessage,
        message: newMsg.message || message.message || '',
        files: message.files ? [...message.files, fileName].sort() : [fileName]
      };
    });
  });
}

function updateMessages(toBuild) {
  const configFile = require(path.join(process.cwd(), 'src', 'universal', 'appConfig'));
  mergeMessages();
  return Promise.all(['_default', ...configFile.locale].map(locale => mergeToFile(locale, toBuild)));
}

/**
 * Extract react-intl messages and write it to src/messages/_default.json
 * Also extends known localizations
 */
function extractMessages() {
  const compare = (a, b) => {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  };

  const compareMessages = (a, b) => compare(a.id, b.id);

  const processFile = fileName => {
    return readFile(fileName)
      .then(function(code) {
        const posixName = posixPath(fileName);
        let result;
        try {
          result = transform(code, {
            presets: ['react', 'es2015', 'stage-2']
          });
        } catch (e) {
          console.error(e);
        }
        if (typeof result !== 'undefined' && result.messages && result.messages.length) {
          fileToMessages[posixName] = result.messages.sort(compareMessages);
        } else {
          delete fileToMessages[posixName];
        }
        return Promise.resolve();
      })
      .catch(function(err) {
        console.error(`extractMessages: In ${fileName}:\n`, err.SyntaxError || err);
        return Promise.reject();
      });
  };

  glob(GLOB_PATTERN).then(function(files) {
    Promise.all(files.map(processFile)).then(function() {
      updateMessages(false);
    });
  });
}

module.exports = extractMessages;
