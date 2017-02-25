/**
 *
 * @providesModule action-types
 * @flow
 *
 */

import type { ReduxActionType } from 'flow-types';

const actionTypes: {[id: string]: ReduxActionType} = {
  addPost: 'addPost',
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
  setLoadingPhrase: 'setLoadingPhrase'
};

export default actionTypes;
