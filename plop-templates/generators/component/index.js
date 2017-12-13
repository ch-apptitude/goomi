/**
 * Component Generator
 */

const absolutePath = require('../utils/absolutePath');

const COMPONENT_TYPE = {
  CLASS: 'ES6 Class',
  STATELESS_FUNCTION: 'Stateless Function',
  FORM: 'Form',
};

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Stateless Function',
      choices: Object.values(COMPONENT_TYPE),
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
    },
    {
      type: 'directory',
      name: 'subFolder',
      message: 'What is your sub folder ?',
      basePath: './src/universal/features/',
    },
    {
      type: 'confirm',
      name: 'wantTest',
      default: false,
      message: 'Does it have test?',
    },
    {
      type: 'confirm',
      name: 'wantCSS',
      default: true,
      message: 'Does it have styling?',
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: true,
      message: 'Do you want i18n messages (i.e. will this component use text)?',
    },
  ],
  actions: (data) => {
    // Generate index.js and index.test.js
    const actions = [];
    // If they want a i18n messages file
    if (data.type === COMPONENT_TYPE.FORM) {
      actions.push({
        type: 'add',
        path: `${process.cwd()}/src/universal/${absolutePath(false, data.subFolder)}/{{properCase name}}/validate.js`,
        templateFile: './component/validate.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: `${process.cwd()}/src/universal/${absolutePath(false, data.subFolder)}/{{properCase name}}/index.js`,
        templateFile: './component/form.js.hbs',
        abortOnFail: true,
      });
    } else {
      actions.push({
        type: 'add',
        path: `${process.cwd()}/src/universal/${absolutePath(false, data.subFolder)}/{{properCase name}}/index.js`,
        templateFile: data.type === COMPONENT_TYPE.CLASS ? './component/es6.js.hbs' : './component/stateless.js.hbs',
        abortOnFail: true,
      });
    }

    // If they want a test file, add test.js
    if (data.wantTest) {
      actions.push({
        type: 'add',
        path: `${process.cwd()}/src/universal/${absolutePath(
          false,
          data.subFolder
        )}/{{properCase name}}/tests/index.test.js`,
        templateFile: './component/test.js.hbs',
        abortOnFail: true,
      });
    }

    // If they want a i18n messages file
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: `${process.cwd()}/src/universal/${absolutePath(false, data.subFolder)}/{{properCase name}}/messages.js`,
        templateFile: './component/messages.js.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
