/**
 *
 * @providesModule actions
 * @flow
 *
 */

import postActions from 'post-actions';
import commentActions from 'comment-actions';
import userActions from 'user-actions';
import errorActions from 'error-actions';

import type { ReduxAction } from 'flow-types';

const actions: {[id: string]: ReduxAction} = Object.assign(
  {},
  postActions,
  commentActions,
  userActions,
  errorActions
);

export default actions;
