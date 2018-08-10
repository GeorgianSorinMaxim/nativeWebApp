## The project

- Uses HOC and Recompose for the creation of HOC container components that keep the business logic, manipulates data. They are also responsible for conditional rendering ‘dumb’ components by passing props to them.
- Shares the Redux store (while using Reselect). That means we shouldn't include platform specific state like navigation into the Redux store. Appolo's GraphQl can be used as an alternative. This layer could be used in the project as a npm package.
- Uses react-primitives for detecting the platform if necessary to be done in certain HOC components.
- Shares styles using styled-components. However, StyleSheet from react-primitives should be used as it has increased performance.
- Uses a native module react-native-device-info.
- Uses Flow and Jest testing.
- WIP: uses react-router for web and react-navigation for native.

## Install the dependencies

`$ npm install`

## Run the web app

- The web app uses webpack for bundling the React app and gulp for building it.

`$ yarn react` - is a custom script that makes use of `$ npm run webpack` and `$ gulp serve`

## Run the iOS app

`$ yarn run-ios`

## Run the Android app

`$ yarn run-android`

## Run the linter and flow

`$ yarn prepush`

## Run the Jest tests

`$ yarn test`
