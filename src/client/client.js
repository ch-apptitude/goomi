import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import createStore from 'redux/createStore';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import { selectLocationState } from 'features/routing/selectors';
import { translationMessages } from 'features/language/i18n';
import Root from './Root';

export default () => {
  const initialState = window.__INITIAL_STATE__;

  const store = createStore(browserHistory, initialState);

  const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: selectLocationState(),
  });

  const rootElement = document.getElementById('root');

  ReactDOM.render(
    <AppContainer>
      <Root history={history} store={store} translatedMessages={translationMessages} />
    </AppContainer>,
    rootElement,
  );

  if (module.hot) {
    module.hot.accept('./Root', () => {
      const NextApp = require('./Root').default; // eslint-disable-line

      // const nextRootReducer = require('../universal/redux/reducers').default; // eslint-disable-line
      // store.replaceReducer(nextRootReducer);
      // ReactDOM.unmountComponentAtNode(rootElement); // TODO : Not needed but may be keep for Reducer Fixed later

      ReactDOM.render(
        <AppContainer>
          <NextApp history={history} store={store} translatedMessages={translationMessages} />
        </AppContainer>,
        rootElement,
      );
    });
  }
};
