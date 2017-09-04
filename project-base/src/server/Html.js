import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';
import { fromJS } from 'immutable';

const setHTML = (content) => ({
  __html: content,
});
/* eslint-disable react/no-danger*/
const Html = ({ store, locale, content, assets }) => {
  const PROD = process.env.NODE_ENV === 'production';
  const { manifest, app } = assets || {}; //eslint-disable-line

  let initialState;
  let body;
  if (store) {
    initialState = `window.__INITIAL_STATE__=${serialize(fromJS(store.getState()))};`;
  }

  if (PROD) {
    body = (
      <body>
        <div id="root" dangerouslySetInnerHTML={setHTML(content)} />
        <script dangerouslySetInnerHTML={setHTML(initialState)} />
        <script dangerouslySetInnerHTML={setHTML(manifest.text)} />
        <script src={app.js} />
      </body>
    );
  } else {
    body = (
      <body>
        <div id="root">
          <div dangerouslySetInnerHTML={setHTML(content)} />
        </div>
        <div id="devtools" />
        <script dangerouslySetInnerHTML={setHTML(initialState)} />
        <script src="/static/app.js" />
      </body>
    );
  }

  const head = Helmet.rewind();
  return (
    <html lang={locale}>
      <head>
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBlSMWyDRoetomYpELBFJj0gyi8Su4YNX0&libraries=places" />
        {PROD && <link rel="stylesheet" href="/static/{{name}}.css" />}
        <link href="https://a.alipayobjects.com/normalize.css/3.0.1/normalize.css" rel="stylesheet" />
        {head.style.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}
        {/* <meta charSet="utf-8" /> */}
      </head>
      {body}
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
