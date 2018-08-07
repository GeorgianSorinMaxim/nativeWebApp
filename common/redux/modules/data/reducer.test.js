// @flow

import reducer from './reducer';
import * as actions from './actions';
import type { State } from './reducer';

const initialState: State = {
  entities: {},
  loading: false
};

describe('Reducer', () => {
  it('should start fetching data', () => {
    const state = reducer(initialState, { type: 'data/START_FETCH' });
    expect(state).toMatchSnapshot();
  });

  it('should finish fetching data sucessfully', () => {
    const action = actions.dataFetchSuccess({});
    const state = reducer(initialState, action);
    expect(state).toMatchSnapshot();
  });

  it('should finish fetching data with a failure', () => {
    const action = actions.dataFetchFailure({});
    const state = reducer(initialState, action);
    expect(state).toMatchSnapshot();
  });
});
