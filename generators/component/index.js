/**
 * Component Generator
 */

const absolutePath = require('../utils/absolutePath');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Stateless Function',
      choices: () => ['ES6 Class', 'Stateless Function'],
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
    {
      type: 'confirm',
      name: 'isForm',
      default: false,
      message: 'Does your component will be a form?',
    },
  ],
  actions: (data) => {
    // Generate index.js and index.test.js
    const actions = [];
    // If they want a i18n messages file
    if (data.isForm) {
      actions.push({
        type: 'add',
        path: `${process.cwd()}/src/universal/${absolutePath(false, data.subFolder)}/components/{{properCase name}}/validate.js`,
        templateFile: './component/validate.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: `${process.cwd()}/src/universal/${absolutePath(false, data.subFolder)}/components/{{properCase name}}/index.js`,
        templateFile: './component/form.js.hbs',
        abortOnFail: true,
      });
    } else {
      actions.push({
        type: 'add',
        path: `${process.cwd()}/src/universal/${absolutePath(false, data.subFolder)}/components/{{properCase name}}/index.js`,
        templateFile: data.type === 'ES6 Class' ? './component/es6.js.hbs' : './component/stateless.js.hbs',
        abortOnFail: true,
      });
    }

    // If they want a test file, add test.js
    if (data.wantTest) {
      actions.push({
        type: 'add',
        path: `${process.cwd()}/src/universal/${absolutePath(
          false,
          data.subFolder,
        )}/components/{{properCase name}}/tests/index.test.js`,
        templateFile: './component/test.js.hbs',
        abortOnFail: true,
      });
    }

    // If they want a CSS file, add styles.css
    if (data.wantCSS) {
      actions.push({
        type: 'add',
        path: `${process.cwd()}/src/universal/${absolutePath(false, data.subFolder)}/components/{{properCase name}}/styles.scss`,
        templateFile: './component/styles.scss.hbs',
        abortOnFail: true,
      });
    }

    // If they want a i18n messages file
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: `${process.cwd()}/src/universal/${absolutePath(false, data.subFolder)}/components/{{properCase name}}/messages.js`,
        templateFile: './component/messages.js.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
