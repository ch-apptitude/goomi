/* eslint-disable global-require, no-console */

import express from 'express';
import compression from 'compression';
import path from 'path';
// Development Libraries
import webpack from 'webpack';
import config from 'appConfig';
import devWebpackConfig from '../../webpack/webpack.config.dev';

import { renderDevPage, renderPage } from './ssr';

import './serverIntlPolyfill';

const root = process.cwd();
const buildSrc = path.resolve(root, 'build');

const PROD = process.env.NODE_ENV === 'production';
if (PROD) {
  require('../../build/prerender'); // eslint-disable-line import/no-unresolved
} else {
  require('features/routing/routes');
}

const app = express();

app.use(compression());
// Production settings
if (PROD) {
  app.use('/static', express.static(buildSrc));

  app.get('*', renderPage);

  // Development settings
} else if (!PROD) {
  const compiler = webpack(devWebpackConfig);

  app.use(
    require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: devWebpackConfig.output.publicPath,
      headers: { 'Access-Control-Allow-Origin': '*' },
    }),
  );

  app.use(
    require('webpack-hot-middleware')(compiler, {
      log: console.log, // eslint-disable-line no-console
    }),
  );

  app.get('*', renderDevPage);
}

const server = app.listen(config.port, (err) => {
  const host = server.address().address;
  const port = server.address().port;
  if (err) {
    return console.error(err);
  }
  return console.log('Listening at http://%s:%s', host, port); // eslint-disable-line no-console
});
