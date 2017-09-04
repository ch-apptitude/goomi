/**
 * generator/index.js 
 *
 * Exports the generators so plop knows them
 */

const fs = require('fs');
const componentGenerator = require('./component/index.js');
const hocGenerator = require('./hoc/index.js');
const featureGenerator = require('./feature/index.js');
const routeGenerator = require('./route/index.js');
const languageGenerator = require('./language/index.js');
const containerGenerator = require('./container/index.js');
const absolutePath = require('./utils/absolutePath');

module.exports = (plop) => {
  // React generators
  plop.addHelper('absulutePath', absolutePath);
  plop.addPrompt('directory', require('inquirer-select-directory'));
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('hoc', hocGenerator);
  plop.setGenerator('feature', featureGenerator);
  plop.setGenerator('route', routeGenerator);
  plop.setGenerator('language', languageGenerator);
  plop.setGenerator('container', containerGenerator);
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
  plop.addHelper('toMessageId', (context, options) => absolutePath(false, context).replace('features/', '').replace('/', ''));
};
