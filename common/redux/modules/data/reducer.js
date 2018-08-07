// @flow

import * as actions from './actions';

import type { Action } from './actions';

export type State = {
  entities: Object,
  loading: boolean,
  error?: any
};

export const initialState: State = {
  entities: {},
  loading: false
};

export default function reducer(
  state: State = initialState,
  action: Action
): State {
  switch (action.type) {
    case actions.START_FETCH_DATA:
      return {
        ...state,
        loading: true
      };

    case actions.DATA_FETCH_SUCCESS:
      return {
        ...state,
        entities: action.payload,
        loading: false
      };

    case actions.DATA_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    default:
      return state;
  }
}
