// @flow
import React, { Component } from 'react';
import { BackHandler, Image } from 'react-native';
import {
  createBottomTabNavigator,
  NavigationActions,
  createStackNavigator
} from 'react-navigation';

import type { NavigationScreenProp } from 'react-navigation';

import HomeScreen from '../../common/components/HomeScreenContainer';

import { Colours } from '../../common/styles';
import Images from '../../common/images';

type Props = {
  showFeedbackPanel: boolean,
  navigation: NavigationScreenProp<*>
};

export const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: () => <HomeScreen />,
    navigationOptions: () => ({
      headerTitle: 'Home'
    })
  }
});

export const tabRouteConfig = {
  Home: {
    screen: () => <HomeStackNavigator />,
    navigationOptions: {
      tabBarIcon: () => <Image source={Images.vessel} />
    }
  }
};

export const tabNavigationConfig: TabNavigatorConfig = {
  lazy: false,
  swipeEnabled: false,
  animationEnabled: false,
  tabBarOptions: {
    inactiveTintColor: Colours.common.black,
    activeTintColor: Colours.common.grey,
    labelStyle: {
      fontSize: 13
    },
    style: {
      elevation: 0,
      shadowOpacity: 0.02,
      shadowRadius: 10,
      borderTopWidth: 0,
      height: 58
    }
  }
};

const TabNavigatorInstance = createBottomTabNavigator(
  tabRouteConfig,
  tabNavigationConfig
);

class TabbedNavigator extends Component<Props> {
  // This is required for it to work, somewhat undocumented
  // https://github.com/react-navigation/react-navigation/issues/3076
  static router = TabNavigatorInstance.router;

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBack);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
  }

  handleBack = () => {
    const { navigation } = this.props;

    if (navigation && navigation.state && navigation.state.index === 0) {
      BackHandler.exitApp();
      return true;
    }

    navigation.dispatch(NavigationActions.back());
    return true;
  };

  render() {
    return <TabNavigatorInstance {...this.props} />;
  }
}

export default TabbedNavigator;
