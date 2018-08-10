// @flow
import { AppNavigator } from '../../../navigator/AppNavigator';

export type State = {
  index: number,
  routes: Array<any>
};

export const initialState: ?State = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('App')
);

export default function reducer(
  state: State = initialState,
  action: Action
): State {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
}
