var webpack = require('webpack');
var path = require('path');

const root = process.cwd();
const src = path.join(root, 'src');
const build = path.join(root, 'build');

const config = path.join(src, 'config.js');
const client = path.join(src, 'client');
const universal = path.join(src, 'universal');
const server = path.join(src, 'server');

var combineLoaders = require('webpack-combine-loaders');

const devInclude = [client, universal, server, config];

module.exports = require('./webpack.config.base')({
  devtool: 'eval',
  // devtool: 'inline-source-map',
  target: 'web',

  entry: {
    app: ['babel-polyfill', 'react-hot-loader/patch', 'webpack-hot-middleware/client', 'clientLoader.js'],
  },
  output: {
    filename: 'app.js',
  },

  node: {
    fs: 'empty',
    net: 'empty',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __PRODUCTION__: false,
      'process.env': {
        WEBPACK: JSON.stringify(true),
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],

  jsIncludes: devInclude,
});
