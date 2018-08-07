// @flow

export const APP_LAUNCHED = 'data/APP_LAUNCHED';

export const START_FETCH_DATA = 'data/START_FETCH';

export const DATA_FETCH_SUCCESS = 'data/FETCH_SUCCESS';
export const DATA_FETCH_FAILURE = 'data/FETCH_FAILURE';

type AppLaunched = {
  type: 'data/APP_LAUNCHED'
};

type StartDataFetch = {
  type: 'data/START_FETCH'
};

type DataFetchSuccess = {
  type: 'data/FETCH_SUCCESS',
  payload: Object
};

type DataFetchFailure = {
  type: 'data/FETCH_FAILURE',
  payload: Object
};

export function appLaunched(): AppLaunched {
  return { type: APP_LAUNCHED };
}

export function startFetchingData(): StartDataFetch {
  return { type: START_FETCH_DATA };
}

export function dataFetchSuccess(payload: Object): DataFetchSuccess {
  return { type: DATA_FETCH_SUCCESS, payload };
}

export function dataFetchFailure(error: Object): DataFetchFailure {
  return { type: DATA_FETCH_FAILURE, payload: { error } };
}

export type Action =
  | AppLaunched
  | StartDataFetch
  | DataFetchSuccess
  | DataFetchFailure;
