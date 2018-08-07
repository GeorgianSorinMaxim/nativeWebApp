import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { HomeScreen } from './HomeScreen';

describe('HomeScreen', () => {
  const defaultProps = {
    data: [],
    loading: false
  };

  it('should render', () => {
    const tree = renderer.create(<HomeScreen {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render loader', () => {
    const tree = renderer
      .create(<HomeScreen {...defaultProps} loading />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
