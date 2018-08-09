// @flow

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/from';

import { combineEpics } from 'redux-observable';
import type { Epic } from 'redux-observable';
import type { Action } from '../../types';

import * as actions from './actions';

export const startFetchDataEpic: Epic<*, Action, any> = action$ =>
  action$.ofType(actions.APP_LAUNCHED).mapTo(actions.startFetchingData());

export const fetchDataEpic: Epic<*, Action, any> = action$ =>
  action$.ofType(actions.START_FETCH_DATA).switchMap(() =>
    fetch('https://reqres.in/api/users?per_page=12')
      .then(
        response =>
          response.ok
            ? response.json()
            : actions.dataFetchFailure({ error: 'FETCH_ERROR' })
      )
      .then(
        result =>
          result.type === 'REQUEST_FAILED'
            ? result
            : actions.dataFetchSuccess(result)
      )
      .catch(() => actions.dataFetchFailure({ error: 'FETCH_ERROR' }))
  );

export default combineEpics(startFetchDataEpic, fetchDataEpic);
