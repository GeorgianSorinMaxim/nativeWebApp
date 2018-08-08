// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Platform } from 'react-primitives';

import HomeScreen from './HomeScreen';

type Props = {
  data: Object,
  loading: boolean
};

export const HomeScreenContainer = ({ data, loading }: Props) => (
  <HomeScreen data={data} loading={loading} platform={Platform.OS} />
);

const mapStateToProps = state => ({
  data: state.data.entities,
  loading: state.data.loading
});

const HomeScreenContainerWithData = connect(
  mapStateToProps,
  {}
)(HomeScreenContainer);

export default HomeScreenContainerWithData;
