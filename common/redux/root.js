// @flow

import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import data, { epics as dataEpics } from './modules/data';

const appReducer = combineReducers({
  data
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export const rootEpic = combineEpics(dataEpics);
