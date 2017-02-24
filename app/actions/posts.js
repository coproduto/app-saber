/**
 *
 * @providesModule post-actions
 * @flow
 *
 */
import actionTypes from 'action-types';

import type {
  ReduxAction,
  ActionObject
} from 'flow-types';

const postActions: {[id: string]: ReduxAction} = {
  addPost: (): ActionObject => ({
      type: actionTypes.addPost,
      payload: {}
  })
};

export default postActions;
