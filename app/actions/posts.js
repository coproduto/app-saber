/**
 *
 * @providesModule post-actions
 * @flow
 *
 */
import actionTypes from 'action-types';
import JsonPlaceholderClient from 'json-placeholder-client';
import Storage from 'persistent-storage';

import type {
  ReduxAction,
  ActionObject
} from 'flow-types';

const posts = new JsonPlaceholderClient().posts();

// função que será usada para buscar os posts online
function retrievePostsOnline(): Promise<Object | null> {
  return Storage.retrieveResourceOnline(posts);
}

// função que será usada para buscar os posts no dispositivo
function retrievePostsOffline(): Promise<Object | null> {
  return Storage.retrieveResourceOffline(posts);
}

function savePosts(postArray: Object): Promise<mixed> {
  return Storage.saveResource(posts, postArray);
}

const postActions: {[id: string]: ReduxAction} = {
  fetchPosts: () => (dispatch) => {
    retrievePostsOffline().then((results) => {
      if (results !== null) {
        dispatch(postActions.setPosts(results));
      }
      dispatch(postActions.fetchPostsOnline(results));
    }).catch(() => dispatch(postActions.fetchPostsOnline(null)));
  },
  fetchPostsOnline: (offlineResults) => (dispatch) => {
    retrievePostsOnline().then((results) => {
      if (results !== null) {
        dispatch(postActions.setPosts(results));
        savePosts(results);
      } else if (offlineResults === null) {
          dispatch(postActions.fetchPostsFail());
        }
      });
  },
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
