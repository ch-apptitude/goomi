import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';
import { fromJS } from 'immutable';

/* eslint-disable react/no-danger*/
const Html = ({ store, locale, content, assets }) => {
  const PROD = process.env.NODE_ENV === 'production';
  const { manifest, app } = assets || {}; //eslint-disable-line

  let initialState;
  if (store) {
    initialState = `window.__INITIAL_STATE__=${serialize(fromJS(store.getState()))};`;
  }

  const head = Helmet.rewind();
  return (
    <html lang={locale}>
      <head>
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBlSMWyDRoetomYpELBFJj0gyi8Su4YNX0&libraries=places" />
        {PROD && <link rel="stylesheet" href="/static/goomi.css" />}
        <link href="https://a.alipayobjects.com/normalize.css/3.0.1/normalize.css" rel="stylesheet" />
        {head.style.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}
        {/* <meta charSet="utf-8" /> */}
      </head>
      <body>
        {PROD ? (
          <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <div id="root">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        )}
        {!PROD && <div id="devtools" />}
        {!PROD && <script dangerouslySetInnerHTML={{ __html: initialState }} />}
        {PROD && <script dangerouslySetInnerHTML={{ __html: manifest.text }} />}
        <script src={PROD ? app.js : '/static/app.js'} />
      </body>
    </html>
  );
};

Html.propTypes = {
  store: PropTypes.object,
  locale: PropTypes.string,
  content: PropTypes.string,
  assets: PropTypes.shape({
    app: PropTypes.object,
    manifest: PropTypes.object,
  }),
};

Html.defaultProps = {
  locale: 'fr',
  content: '',
  assets: { app: {}, manifest: {} },
  store: undefined,
};

export default Html;
