// @flow

import { createStore, applyMiddleware } from 'redux';

import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer, rootEpic } from './root';

const epicMiddleware = store =>
  createEpicMiddleware(rootEpic, { dependecies: { dispatch: store.dispatch } })(
    store
  );

const getEnhancers = () => {
  const enhancers = applyMiddleware(epicMiddleware);

  /* global __DEV__ */
  if (__DEV__) {
    /* eslint-disable */
    const devToolsCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : composeWithDevTools;
    /* eslint-enable */

    return devToolsCompose({
      realtime: true,
      port: 8010
    })(enhancers);
  }

  return enhancers;
};

export default function configureStore() {
  return createStore(rootReducer, getEnhancers());
}
