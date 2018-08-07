// @flow

import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  VirtualizedList
} from 'react-native';

import { Colours } from '../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colours.common.backgroundColor
  },
  content: {
    flex: 1,
    width: '100%',
    marginVertical: 40
  },
  welcome: {
    margin: 10,
    fontSize: 20,
    textAlign: 'center'
  },
  instructions: {
    marginBottom: 5,
    color: Colours.common.textColor,
    textAlign: 'center'
  },
  listContainer: {
    marginVertical: 20
  },
  listRow: {
    minHeight: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colours.common.border,
    backgroundColor: Colours.common.white
  },
  left: {
    color: Colours.common.greyText,
    alignItems: 'flex-start'
  },
  right: {
    flex: 1,
    marginLeft: 40
  }
});

type Props = {
  data: Object,
  loading: boolean
};

type State = {};

export class HomeScreen extends Component<Props, State> {
  renderItem = (element: Object) => (
    <View key={`list_{element.item.id}`} style={styles.listRow}>
      <Text style={styles.left}>Title</Text>
      <Text style={styles.right}>{element.item.title}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        {!this.props.loading ? (
          <View style={styles.content}>
            <Text style={styles.welcome}>Hello 90poe!</Text>
            <Text style={styles.instructions}>This is the 📱 app</Text>
            <VirtualizedList
              style={styles.listContainer}
              getItemCount={data => data.length}
              getItem={(data, index) => data[index]}
              keyExtractor={(item, index) => `list_${index}_${item.value}`}
              renderItem={item => this.renderItem(item)}
              data={this.props.data}
              initialNumToRender={25}
              windowSize={21}
            />
          </View>
        ) : (
          <ActivityIndicator />
        )}
      </View>
    );
  }
}
export default HomeScreen;
