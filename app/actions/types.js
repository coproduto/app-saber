/**
 *
 * @providesModule action-types
 * @flow
 *
 */

import type { ReduxActionType } from 'flow-types';

const actionTypes: {[id: string]: ReduxActionType} = {
  setPosts: 'setPosts',
  fetchPostsFail: 'fetchPostsFail',
  savePosts: 'savePosts',
  setUsers: 'setUsers',
  saveUsers: 'saveUsers',
  fetchUsersFail: 'fetchUsersFail',
  setComments: 'setComments',
  saveComments: 'saveComments',
  fetchCommentsFail: 'fetchCommentsFail',
  showLoadingIndicators: 'showLoadingIndicators',
  hideLoadingIndicators: 'hideLoadingIndicators',
  setLoadingPhrase: 'setLoadingPhrase',
  clearErrors: 'clearErrors'
};

export default actionTypes;
