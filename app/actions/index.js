/**
 *
 * @providesModule actions
 * @flow
 *
 */

import postActions from 'post-actions';
import commentActions from 'comment-actions';
import userActions from 'user-actions';
import uiActions from 'ui-actions';

import type { ReduxAction } from 'flow-types';

const actions: {[id: string]: ReduxAction} = Object.assign(
  {},
  postActions,
  commentActions,
  userActions,
  uiActions
);

export default actions;
