// @flow

import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';

import type { Store } from 'redux';

import configureStore from './redux/configureStore';
import * as actions from './redux/modules/data/actions';

import HomeScreenContainer from './components/HomeScreenContainer';

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
        <HomeScreenContainer />
      </Provider>
    );
  }

  render() {
    return this.state.loading ? null : this.renderLoadedApp();
  }
}

export default App;
