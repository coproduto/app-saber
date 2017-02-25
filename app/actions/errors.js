/**
 *
 * @providesModule error-actions
 * @flow
 *
 */

import actionTypes from 'action-types';

import type {
  ReduxAction,
  ActionObject
} from 'flow-types';

const errorActions: {[id: string]: ReduxAction} = {
  clearErrors: (): ActionObject => ({
    type: actionTypes.clearErrors,
    payload: {}
  })
};

export default errorActions;

