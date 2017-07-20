/**
 * Container Generator
 */

const absolutePath = require('../utils/absolutePath');

module.exports = {
  description: 'Add a hoc container',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
    },
    {
      type: 'directory',
      name: 'featureFolder',
      message: 'Where goes the container?',
      basePath: './src/universal/features/',
    },
    {
      type: 'directory',
      name: 'toWrap',
      message: 'What component you want to wrap ?',
      basePath: './src/universal/features/',
    },
  ],
  actions: (data) => [
    {
      type: 'add',
      path: `${process.cwd()}/src/universal/${absolutePath(false, data.featureFolder)}/containers/{{properCase name}}.js`,
      templateFile: './container/index.js.hbs',
      abortOnFail: true,
    },
  ],
};
