import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import rootSaga from './sagas';

export default (history, initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const reduxRouterMiddleware = routerMiddleware(history);

  const middlewares = [reduxRouterMiddleware, sagaMiddleware];

  const state = initialState || {};

  const store = createStore(reducer, fromJS(state), composeWithDevTools(applyMiddleware(...middlewares)));

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers').default; // eslint-disable-line
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
