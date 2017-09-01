const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var combineLoaders = require('webpack-combine-loaders');

const htmlWebpackPlugin = new HtmlWebpackPlugin({ template: './client/index.html' });

const definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development' || 'true')),
});


var root = process.cwd();
var src = path.resolve(root, 'src');
var nodeModulesSrc = path.resolve(root, 'node_modules');
var buildSrc = path.resolve(root, 'build');
var clientSrc = path.resolve(src, 'client');
var serverSrc = path.resolve(src, 'server');
var universalSrc = path.resolve(src, 'universal');

module.exports = {
  context: src,
  entry: clientSrc + '/index',
  output: {
    filename: '[hash].js',
  },
  devtool: 'cheap-module-source-map',
  plugins: [htmlWebpackPlugin, definePlugin],

  resolve: {
    modules: [clientSrc, universalSrc, nodeModulesSrc],
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [clientSrc, universalSrc],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-2'],
            },
          },
        ],
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
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
        ],
        include: nodeModulesSrc,
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
      { test: /\.html$/, loader: 'html-loader' },
    ],
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api*': 'http://localhost:8181',
    },
  },
};
