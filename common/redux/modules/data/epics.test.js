import 'rxjs';
import 'isomorphic-fetch';

import { ActionsObservable } from 'redux-observable';

import * as actions from './actions';

import { startFetchDataEpic, fetchDataEpic } from './epics';

const store = {
  dispatch: action => action,
  getState: () => {}
};

describe('Epics', () => {
  describe('startFetchDataEpic', () => {
    it('should call action for start fetching data', () => {
      const action$ = ActionsObservable.of(actions.appLaunched());

      return startFetchDataEpic(action$, store, {})
        .toArray()
        .forEach(result => {
          expect(result).toMatchSnapshot();
        });
    });
  });

  describe('fetchDataEpic', () => {
    it('should call set success action with payload', () => {
      const action$ = ActionsObservable.of(actions.startFetchingData());

      return fetchDataEpic(action$, store, {})
        .toArray()
        .forEach(result => {
          expect(result).toMatchSnapshot();
        });
    });

    it('should call set failure action with error', () => {
      const action$ = ActionsObservable.of(actions.startFetchingData());

      return fetchDataEpic(action$, store, {})
        .toArray()
        .forEach(result => {
          expect(result).toMatchSnapshot();
        });
    });
  });
});
