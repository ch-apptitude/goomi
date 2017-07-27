const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var combineLoaders = require('webpack-combine-loaders');
var autoprefixer = require('autoprefixer');

const htmlWebpackPlugin = new HtmlWebpackPlugin({ template: './client/index.html' });
const definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development' || 'true')),
});

const loaderOptions = new webpack.LoaderOptionsPlugin({
  options: {
    context: __dirname, // must evaluate to root of project
    output: {
      path: './',
    },
    postcss: [
      autoprefixer({
        browsers: ['last 3 version', 'ie >= 10'],
      }),
    ],
  },
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
  plugins: [htmlWebpackPlugin, definePlugin, loaderOptions],

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
      {
        test: /\.s?css$/,
        include: [universalSrc, nodeModulesSrc],
        loader: combineLoaders([
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            query: {
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
              includePaths: [universalSrc],
              outputStyle: 'expanded',
              sourceMap: true,
              sourceMapContents: true,
            },
          },
        ]),
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
