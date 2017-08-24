// All subsequent files required by node with the extensions .es6, .es, .jsx and .js will be transformed by Babel.
require('babel-core/register');

require('ignore-styles').default(['.css', '.less', '.sass', '.scss', '.jpg', '.png', '.gif', '.ico', '.woff', '.woff2']);

// Pollyfill for features like generators https://babeljs.io/docs/usage/polyfill.
require('babel-polyfill');

// Server Driver Code, everything from here on can use all the super future features!
require('./server');
