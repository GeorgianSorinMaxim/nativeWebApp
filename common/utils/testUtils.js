// @flow

import React from 'react';
import renderer from 'react-test-renderer';

type OptionsProps = {
  props?: Object,
  state?: Object
};

export default function render(
  component: any,
  { props, state }: OptionsProps = {}
) {
  const isDOM = React.isValidElement(component);
  const element = isDOM ? component : React.createElement(component, props);
  const testRender = renderer.create(element);
  const instance = testRender.getInstance();
  const tree = testRender.toJSON();

  if (instance) {
    instance.setState(state);
  }

  return {
    instance,
    tree
  };
}
