/**
 * HOC Generator
 */
const absolutePath = require('../utils/absolutePath');

module.exports = {
    description: 'Add a hoc component',
    prompts: [
        {
            type: 'directory',
            name: 'name',
            message: "What it's name?",
            default: 'hocForm',
        }, {
            type: 'directory',
            name: 'featureFolder',
            message: 'Select in which feature to put it',
            default: 'ui'
        }
    ],
    actions: (data) => [
        {
            type: 'add',
      path: `${process.cwd()}/src/universal/${absolutePath(false, data.featureFolder)}/hoc/{{properCase name}}.js`,
            path: process.cwd() + '/src/universal/hoc/{{properCase subFolder}}/{{properCase name}}.js',
            templateFile: './hoc/index.js.hbs',
            abortOnFail: true
        }
    ]
};
