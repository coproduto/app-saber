/**
 *
 * @providesModule actions
 * @flow
 *
 */

import PostActions from 'post-actions';
import CommentActions from 'comment-actions';

import type { ReduxAction } from 'flow-types';

const actions: {[id: string]: ReduxAction} = Object.assign(
  {},
  PostActions,
  CommentActions
);

export default actions;
