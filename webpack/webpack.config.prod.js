var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var combineLoaders = require('webpack-combine-loaders');
var AssetsPlugin = require('assets-webpack-plugin');

const root = process.cwd();
const src = path.join(root, 'src');
const config = path.join(src, 'config.js');
const build = path.join(root, 'build');

const client = path.join(src, 'client');
const universal = path.join(src, 'universal');

const clientInclude = [client, universal, config];

const ExtractTextPluginSASS = new ExtractTextPlugin({ filename: 'goomi.css', ignoreOrder: true });

module.exports = require('./webpack.config.base')({
  target: 'web',

  entry: {
    app: ['babel-polyfill', 'clientLoader.js'],
  },
  output: {
    filename: '[name]_[chunkhash].js',
  },

  node: {
    dns: 'mock',
    net: 'mock',
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: (module) => /node_modules/.test(module.resource),
      // minChunks: Infinity
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    // new webpack.optimize.MinChunkSizePlugin({minChunkSize: 5000000}),
    new webpack.optimize.UglifyJsPlugin({
      // compressor: {
      //     warnings: false
      // },
      sourceMap: true,
      // comments: /(?:)/
    }),
    new AssetsPlugin({ path: build, filename: 'assets.json' }),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __PRODUCTION__: true,
      'process.env': {
        WEBPACK: JSON.stringify(true),
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    ExtractTextPluginSASS,
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],

  jsIncludes: clientInclude,

  jsLoaderPreset: [
    [
      'es2015',
      {
        modules: false,
      },
    ],
    'react',
    'stage-2',
  ],

  scssLoader: ExtractTextPluginSASS.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 2,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      {
        loader: 'postcss-loader',
      },
      {
        loader: 'sass-loader',
        options: {
          data: '@import "assets/style/variables.scss";',
          includePaths: [universal],
          outputStyle: 'expanded',
          sourceMap: true,
          sourceMapContents: true,
        },
      },
    ],
  }),
});
