// @flow

export const APP_LAUNCHED = 'data/APP_LAUNCHED';

export const START_FETCH_DATA = 'data/START_FETCH';

export const DATA_FETCH_SUCCESS = 'data/FETCH_SUCCESS';
export const DATA_FETCH_FAILURE = 'data/FETCH_FAILURE';

export function appLaunched() {
  return { type: APP_LAUNCHED };
}

export function startFetchingData() {
  return { type: START_FETCH_DATA };
}

export function dataFetchSuccess(data) {
  return { type: DATA_FETCH_SUCCESS, payload: data };
}

export function dataFetchFailure(error) {
  return { type: DATA_FETCH_FAILURE, payload: error };
}
