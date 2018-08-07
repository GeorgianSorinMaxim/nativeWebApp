import React from 'react';

import configureStore from './redux/configureStore';
import * as actions from './redux/modules/data/actions';

import render from './utils/testUtils';
import App from './App';

const mockStore = {
  dispatch: jest.fn(),
  subscribe: jest.fn(),
  getState: () => ({
    data: {
      entities: [],
      loading: false
    }
  })
};

jest.mock('./redux/configureStore', () => jest.fn(() => mockStore));

describe('App', () => {
  describe('render', () => {
    it('renders nothing before mounting and initialising', () => {
      const { tree } = render(<App />);

      expect(tree).toMatchSnapshot();
    });
  });

  describe('asyncComponentDidMount', () => {
    it('initialises correctly', async () => {
      const { instance } = render(<App />);

      await instance.asyncComponentDidMount();
      const tree = instance.render();
      expect(tree).toMatchSnapshot();
      expect(instance.state.loading).toBe(false);
      expect(configureStore).toHaveBeenCalled();
      expect(mockStore.dispatch).toHaveBeenCalledWith(actions.appLaunched());
    });
  });
});
