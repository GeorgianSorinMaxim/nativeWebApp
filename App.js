import 'babel-polyfill';
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import type { Store } from 'redux';

import configureStore from './common/redux/configureStore';
import * as actions from './common/redux/modules/data/actions';

import HomeScreen from './common/components/HomeScreen';

type Props = {};
type State = {
  loading: boolean
};

export class App extends React.Component<Props, State> {
  store: Store<any, any>;

  state = {
    loading: true
  };

  componentDidMount() {
    this.asyncComponentDidMount();
  }

  asyncComponentDidMount = async () => {
    this.store = configureStore();

    this.setState({ loading: false });

    this.store.dispatch(actions.appLaunched());
  };

  renderLoadedApp() {
    return (
      <Provider store={this.store}>
        <HomeScreen />
      </Provider>
    );
  }

  render() {
    return this.state.loading ? null : this.renderLoadedApp();
  }
}

export default App;
