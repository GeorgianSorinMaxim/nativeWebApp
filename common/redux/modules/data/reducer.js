// @flow

import * as actions from './actions';

export const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.DATA_FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
}
