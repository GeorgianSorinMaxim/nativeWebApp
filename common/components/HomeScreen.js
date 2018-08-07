import React, { Component } from 'react';
import { connect } from 'react-redux';

export class HomeScreen extends Component<Props, State> {
  render() {
    console.log('PROPS', this.props);
    return (
      <div>
        <h1>Hello 90poe</h1>
        <p>This is the 🕸 app</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

const HomeScreenWithData = connect(mapStateToProps, {})(HomeScreen);

export default HomeScreenWithData;
