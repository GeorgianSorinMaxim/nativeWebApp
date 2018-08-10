// @flow
import { NavigationActions } from 'react-navigation';

const navToPath = path => NavigationActions.navigate({ routeName: path });
// const navToPathWithParams = (path: string, params: Object) =>
//   NavigationActions.navigate({ routeName: path, params });

const navToHome = () => navToPath('Home');
const navToFeature = () => navToPath('Feature');

export const actions = {
  navToHome,
  navToFeature
};
