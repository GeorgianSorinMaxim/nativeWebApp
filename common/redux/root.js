// @flow

import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import data, { epics as dataEpics } from './modules/data';
import nav from './modules/nav';

import type { State } from './modules/data/reducer';
import type { Action } from './types';

const appReducer = combineReducers({
  data,
  nav
});

export const rootReducer = (state: State, action: Action) =>
  appReducer(state, action);

export const rootEpic = combineEpics(dataEpics);
