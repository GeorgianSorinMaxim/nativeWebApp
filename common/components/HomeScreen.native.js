// @flow

import React, { Component } from 'react';
import DeviceInfo from 'react-native-device-info';

import {
  Text,
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
  VirtualizedList
} from 'react-native';
import styled from 'styled-components/native';

import { Colours, Styles } from '../styles';
import Images from '../images';

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
    marginTop: 20
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
    marginLeft: 5
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  }
});

type Props = {
  data: Object,
  loading: boolean,
  platform: string
};

type State = {};

const Wrapper = styled.View`
  ${Styles.wrapper};
`;

const StyledText = styled.Text`
  ${Styles.text};
`;

export class HomeScreen extends Component<Props, State> {
  renderItem = (element: Object) => (
    <View key={`list_{element.item.id}`} style={styles.listRow}>
      <Text style={styles.left}>{element.item.first_name}</Text>
      <Text style={styles.right}>{element.item.last_name}</Text>
      <Image source={{ uri: element.item.avatar }} style={styles.avatar} />
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        {!this.props.loading ? (
          <View style={styles.content}>
            <Wrapper>
              <Image source={Images.vessel} style={styles.avatar} />
            </Wrapper>
            {this.props.data.length > 0 ? (
              <VirtualizedList
                getItemCount={data => data.length}
                getItem={(data, index) => data[index]}
                keyExtractor={(item, index) => `list_${index}_${item.value}`}
                renderItem={item => this.renderItem(item)}
                data={this.props.data}
                initialNumToRender={25}
                windowSize={21}
              />
            ) : null}
            <StyledText>
              This is the 📱 app running on {this.props.platform.toUpperCase()}
              {' - '}
              {DeviceInfo.getModel()}
            </StyledText>
          </View>
        ) : (
          <ActivityIndicator />
        )}
      </View>
    );
  }
}
export default HomeScreen;
