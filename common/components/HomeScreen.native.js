import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    margin: 10,
    fontSize: 20,
    textAlign: 'center'
  },
  instructions: {
    marginBottom: 5,
    color: '#333333',
    textAlign: 'center'
  }
});

export class HomeScreen extends Component<Props, State> {
  render() {
    console.log('PROPS', this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello 90poe!</Text>
        <Text style={styles.instructions}>This is the 📱 app</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

const HomeScreenWithData = connect(mapStateToProps, {})(HomeScreen);

export default HomeScreenWithData;
