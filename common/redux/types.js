// @flow

import type { Action as DataAction, State as DataState } from './modules/data';

export type Action = DataAction;

export type State = {
  data: DataState
};
