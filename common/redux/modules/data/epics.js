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

import { Observable } from 'rxjs/Observable';
import { combineEpics } from 'redux-observable';

import * as actions from './actions';

const startFetchDataEpic = action$ =>
  action$.ofType(actions.APP_LAUNCHED).mapTo(actions.startFetchingData());

const fetchDataEpic = action$ =>
  action$.ofType(actions.START_FETCH_DATA).switchMap(() =>
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then(
        response =>
          response.ok ? response.json() : actions.dataFetchFailure(FETCH_ERROR)
      )
      .then(
        result =>
          result.type === 'REQUEST_FAILED'
            ? result
            : actions.dataFetchSuccess(result)
      )
      .catch(() => actions.dataFetchFailure(FETCH_ERROR))
  );

export default combineEpics(startFetchDataEpic, fetchDataEpic);
