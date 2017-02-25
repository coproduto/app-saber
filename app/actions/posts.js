/**
 *
 * @providesModule post-actions
 * @flow
 *
 */
import actionTypes from 'action-types';
import JsonPlaceholderClient from 'json-placeholder-client';

import type {
  ReduxAction,
  ActionObject
} from 'flow-types';

const posts = new JsonPlaceholderClient().posts();

const postActions: {[id: string]: ReduxAction} = {
  addPost: (): ActionObject => ({
      type: actionTypes.addPost,
      payload: {}
  }),
  fetchPosts: () => (dispatch) =>
    posts.all().then((result) => {
      if (result.status === 'success') {
        return result.response;
      }
      dispatch(postActions.fetchPostsFail());

      return null;
    }).then((response) => {
      if (response) {
        dispatch(postActions.setPosts(response));
      }
    }),
  setPosts: (postsArray: Object[]): ActionObject => ({
    type: actionTypes.setPosts,
    payload: postsArray
  }),
  fetchPostsFail: (): ActionObject => ({
    type: actionTypes.fetchPostsFail,
    payload: {}
  })
};

export default postActions;
