import * as actions from './actions';

describe('Actions', () => {
  describe('appLaunched', () => {
    it('should return an app launched action', () => {
      const action = actions.appLaunched();
      expect(action).toMatchSnapshot();
    });
  });

  describe('startFetchingData', () => {
    it('should return a start fetching data action', () => {
      const action = actions.startFetchingData();
      expect(action).toMatchSnapshot();
    });
  });

  describe('dataFetchSuccess', () => {
    it('should return a data fetch success action', () => {
      const action = actions.dataFetchSuccess();
      expect(action).toMatchSnapshot();
    });
  });

  describe('dataFetchFailure', () => {
    it('should return a data fetch failure action', () => {
      const action = actions.dataFetchFailure();
      expect(action).toMatchSnapshot();
    });
  });
});
