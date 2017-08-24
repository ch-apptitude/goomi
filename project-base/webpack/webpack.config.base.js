var path = require('path');
var webpack = require('webpack');

var CopyWebpackPlugin = require('copy-webpack-plugin');
require('es6-promise').polyfill();

var root = process.cwd();
var src = path.resolve(root, 'src');
var config = path.resolve(src, 'config.js');
var nodeModulesSrc = path.resolve(root, 'node_modules');
var buildSrc = path.resolve(root, 'build');
var clientSrc = path.resolve(src, 'client');
var serverSrc = path.resolve(src, 'server');
var universalSrc = path.resolve(src, 'universal');

const babelOptions = {
  presets: ['es2015', 'react', 'stage-2'],
  compact: true,
  plugins: [
    'transform-class-properties',
    'styled-components',
    [
      'module-resolver',
      {
        root: ['./src/client', './src/universal', './src/server', './node_modules'],
      },
    ],
  ],
};

module.exports = function(options) {
  return {
    devtool: options.devtool,
    target: options.target,

    entry: Object.assign({}, options.entry),
    output: Object.assign(
      {
        chunkFilename: '[name]_[chunkhash].js',
        path: buildSrc,
        publicPath: '/static/',
      },
      options.output,
    ),

    node: Object.assign({}, options.node),

    plugins: options.plugins.concat([
      new CopyWebpackPlugin([
        {
          from: 'src/universal/assets/static',
          to: buildSrc + '/assets',
        },
      ]),
      new webpack.IgnorePlugin(/\/iconv-loader$/), // fix node-fetch warning
      new webpack.ProvidePlugin({
        Promise: 'imports-loader?this=>global!exports-loader?global.Promise!es6-promise',
        fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
    ]),

    resolve: {
      modules: [clientSrc, universalSrc, nodeModulesSrc, config],
      mainFields: ['browser', 'main', 'jsnext:main'],
    },

    module: {
      rules: [
        // Javascript
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: babelOptions,
            },
          ],
          include: options.jsIncludes /*,*/,
        },

        // JSON
        {
          test: /\.json$/,
          loader: 'json-loader',
        },

        // FONTS
        {
          test: /\.(eot|svg|ttf|woff|woff2|ico)$/,
          loader: 'file-loader?limit=10000',
        },
        
        // STYLE: CSS (externals)
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }
          ],
          include: options.nodeModulesSrc /*,*/,
        },

        // IMAGES
        {
          test: /\.(jpg|png|gif)$/,
          loaders: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              query: {
                mozjpeg: {
                  progressive: true,
                },
                gifsicle: {
                  interlaced: false,
                },
                optipng: {
                  optimizationLevel: 4,
                },
                pngquant: {
                  quality: '75-90',
                  speed: 3,
                },
              },
            },
          ],
        },
      ],
    },
  };
};
