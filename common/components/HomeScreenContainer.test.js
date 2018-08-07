import 'react-native';
import React from 'react';
import render from '../utils/testUtils';

import { HomeScreenContainer } from './HomeScreenContainer';

describe('HomeScreenContainer', () => {
  const defaultProps = {
    data: [],
    loading: false
  };

  it('should render', () => {
    const { tree } = render(<HomeScreenContainer {...defaultProps} />);
    expect(tree).toMatchSnapshot();
  });
});
