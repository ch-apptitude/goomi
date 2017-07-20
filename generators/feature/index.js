/**
 * Module Generator
 */

const absolutePath = require('../utils/absolutePath');
const camelCase = require('../utils/camelCase');
const fs = require('fs');

module.exports = {
    description: 'Add a feature',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'What should it be called?',
            default: 'user',
        }, 
        {
            type: 'directory',
            name: 'featureFolder',
            message: 'Select the feature folder ?',
            basePath: './src/universal/features/',
        },
        {
            type: 'confirm',
            name: 'wantActionsAndReducer',
            default: true,
            message: 'Do you want an actions/constants/selectors/reducer tupel for this container?'
        }, 
        {
            type: 'confirm',
            name: 'wantSagas',
            default: true,
            message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)'
        }
    ],
    actions: (data) => {
        // Generate index.js and index.test.js
        const actions = [];

        // If they want actions and a reducer, generate actions.js, constants.js,
        // reducer.js and the corresponding tests for actions and the reducer
        // Actions
        fs.mkdirSync(`${process.cwd()}/src/universal/${absolutePath(false, data.featureFolder)}/${camelCase(data.name)}`)
        fs.mkdirSync(`${process.cwd()}/src/universal/${absolutePath(false, data.featureFolder)}/${camelCase(data.name)}/components`)
        fs.mkdirSync(`${process.cwd()}/src/universal/${absolutePath(false, data.featureFolder)}/${camelCase(data.name)}/containers`)
        fs.mkdirSync(`${process.cwd()}/src/universal/${absolutePath(false, data.featureFolder)}/${camelCase(data.name)}/hoc`)

        actions.push({
            type: 'add',
            path: `${process.cwd()}/src/universal/${absolutePath(false, data.featureFolder)}/{{camelCase name}}/actions.js`,
            templateFile: './feature/actions.js.hbs',
            abortOnFail: true
        });
        actions.push({
            type: 'add',
            path: `${process.cwd()}/src/universal/${absolutePath(false, data.featureFolder)}/{{camelCase name}}/tests/actions.test.js`,
            templateFile: './feature/actions.test.js.hbs',
            abortOnFail: true
        });

        // Selectors
        actions.push({
            type: 'add',
            path: `${process.cwd()}/src/universal/${absolutePath(false, data.featureFolder)}/{{camelCase name}}/selectors.js`,
            templateFile: './feature/selectors.js.hbs',
            abortOnFail: true
        });
        actions.push({
            type: 'add',
            path: `${process.cwd()}/src/universal/${absolutePath(false, data.featureFolder)}/{{camelCase name}}/tests/selectors.test.js`,
            templateFile: './feature/selectors.test.js.hbs',
            abortOnFail: true
        });

        // Reducer
        actions.push({
            type: 'add',
            path: `${process.cwd()}/src/universal/${absolutePath(false, data.featureFolder)}/{{camelCase name}}/reducer.js`,
            templateFile: './feature/reducer.js.hbs',
            abortOnFail: true
        });
        actions.push({
            type: 'modify',
            path: process.cwd() + '/src/universal/redux/reducers.js',
            pattern: /(\/\*\s*apptitude\s*IMPORT.*\*\/)/g,
            template: `import {{ camelCase name }} from '${absolutePath(false, data.featureFolder)}/{{camelCase name}}/reducer';\n$1`,
            abortOnFail: true
        });
        actions.push({
            type: 'modify',
            path: process.cwd() + '/src/universal/redux/reducers.js',
            pattern: /(\/\*\s*apptitude\s*DECLARATION.*\*\/)/g,
            template: `{{ camelCase name }},\n    $1`,
            abortOnFail: true
        });
        actions.push({
            type: 'add',
            path: `${process.cwd()}/src/universal/${absolutePath(false, data.featureFolder)}/{{camelCase name}}/tests/reducer.test.js`,
            templateFile: './feature/reducer.test.js.hbs',
            abortOnFail: true
        });

        // Sagas
        if (data.wantSagas) {
            actions.push({
                type: 'add',
                path: `${process.cwd()}/src/universal/${absolutePath(false, data.featureFolder)}/{{camelCase name}}/sagas.js`,
                templateFile: './feature/sagas.js.hbs',
                abortOnFail: true
            });
            actions.push({
                type: 'add',
                path: `${process.cwd()}/src/universal/${absolutePath(false, data.featureFolder)}/{{camelCase name}}/tests/sagas.test.js`,
                templateFile: './feature/sagas.test.js.hbs',
                abortOnFail: true
            });
            actions.push({
                type: 'modify',
                path: process.cwd() + '/src/universal/redux/sagas.js',
                pattern: /(\/\*\s*apptitude\s*IMPORT.*\*\/)/g,
                template: `import * as {{ camelCase name }}Saga from '${absolutePath(false, data.featureFolder)}/{{camelCase name}}/sagas';\n$1`,
                abortOnFail: true
            });
            actions.push({
                type: 'modify',
                path: process.cwd() + '/src/universal/redux/sagas.js',
                pattern: /(\/\*\s*apptitude\s*INJECT.*\*\/)/g,
                template: `injectSagas(sagas, {{ camelCase name }}Saga);\n    $1`,
                abortOnFail: true
            });
        }

        return actions;
    }
};
