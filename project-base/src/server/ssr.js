/* eslint-disable global-require, no-console */
import { join, basename } from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOM from 'react-dom/server';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createMemoryHistory, match, RouterContext } from 'react-router';

import LanguageProvider from 'features/language/LanguageProvider';
import createStore from 'redux/createStore';
import { selectLocationState } from 'features/routing/selectors';
import { translationMessages } from 'features/language/i18n';
import Html from './Html';

const renderHtml = (Routes, history, store, locale, req, res, assets) => {
  match(
    {
      routes: Routes.default,
      location: req.url,
      history,
    },
    (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        const content = ReactDOM.renderToString(
          <Provider store={store}>
            <LanguageProvider messages={translationMessages}>
              <RouterContext {...renderProps} />
            </LanguageProvider>
          </Provider>,
        );

        res.send(`<!doctype html>\n${ReactDOM.renderToStaticMarkup(<Html content={content} assets={assets} locale={locale} />)}`);
      } else {
        res.status(404).send('Not found');
      }
    },
  );
};

export const renderDevPage = (req, res) => {
  const staticRoutes = require('features/routing/routes');
  // TODO : GetBrowserLang
  const locale = 'en'; // req.language;
  const memoryHistory = createMemoryHistory(req.url);
  const store = createStore(memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store, {
    selectLocationState: selectLocationState(),
  });
  renderHtml(staticRoutes, history, store, locale, req, res);
};

export const renderPage = (req, res) => {
  const staticRoutes = require('../../build/prerender'); // eslint-disable-line import/no-unresolved
  const locale = 'en'; // req.language;
  const memoryHistory = createMemoryHistory(req.url);
  const store = createStore(memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store, {
    selectLocationState: selectLocationState(),
  });

  const assets = require('../../build/assets.json'); // eslint-disable-line import/no-unresolved
  assets.manifest.text = fs.readFileSync(join(__dirname, '..', '..', 'build', basename(assets.manifest.js)), 'utf-8');

  renderHtml(staticRoutes, history, store, locale, req, res, assets);
};
