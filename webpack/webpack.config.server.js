var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var combineLoaders = require('webpack-combine-loaders');
var AssetsPlugin = require('assets-webpack-plugin');

const root = process.cwd();
const src = path.join(root, 'src');
const config = path.join(src, 'config.js');
const build = path.join(root, 'build');
const universal = path.join(src, 'universal');
const server = path.join(src, 'server');

const serverInclude = [server, universal, config];
const ExtractTextPluginSASS = new ExtractTextPlugin({ filename: 'goomi.css', ignoreOrder: true });

module.exports = require('./webpack.config.base')({
  target: 'node',
  node: { process: false, window: false },

  entry: {
    prerender: 'features/routing/routes.js',
    // server: './tmpBuild/server/server.js'
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },

  plugins: [
    // new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
    ExtractTextPluginSASS,
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __PRODUCTION__: true,
      'process.env': {
        WEBPACK: JSON.stringify(true),
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],

  jsIncludes: serverInclude,

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
