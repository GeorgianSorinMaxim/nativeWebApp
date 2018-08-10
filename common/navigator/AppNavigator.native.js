// @flow

import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';

import TabbedNavigator from '../../app/navigator/TabbedNavigator';

export const AppNavigator = createStackNavigator({
  App: {
    screen: TabbedNavigator,
    navigationOptions: {
      header: null
    }
  }
});

const AppNavigatorWithState = reduxifyNavigator(AppNavigator, 'root');

type Props = {
  dispatch: any,
  navigationState: any
};

const AppNavigatorWithHelpers = (props: Props) => (
  <AppNavigatorWithState
    dispatch={props.dispatch}
    state={props.navigationState}
  />
);

const mapStateToProps = state => ({
  navigationState: state.nav
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppNavigatorWithHelpers);
