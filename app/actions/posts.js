/**
 *
 * @providesModule post-actions
 * @flow
 *
 */
import actionTypes from 'action-types';
import JsonPlaceholderClient from 'json-placeholder-client';
import { AsyncStorage } from 'react-native';

import type {
  ReduxAction,
  ActionObject
} from 'flow-types';

const posts = new JsonPlaceholderClient().posts();

const store = "@SaberStore";

function makeKey(name: string): string {
  return store + ":" + name;
}

function retrieveResourceOnline(resource: Resource): Promise<Object> {
  return new Promise((resolve) => {
    resource.all().then((result) => {
      if (result.status === 'success') {
        return result.response;
      }      
      return null;
    }).then((response) => {
      resolve(response);
    }).catch(() => {
      resolve(null);
    });
  });
}

function retrieveResourceOffline(resource: Resource): Promise<Object> {
  return new Promise((resolve) => 
                     AsyncStorage.getItem(makeKey(resource.name)).then((item) => {
      const itemValue = JSON.parse(item);
      resolve(itemValue);
    }).catch(() => {
      resolve(null);
    })
  );
}

function saveResource(resource: Resource, value: Object): Promise<mixed> {
  const promise = AsyncStorage
          .setItem(makeKey(resource.name), JSON.stringify(value))
          .catch((err) => console.log(err));

  return promise;
}

// função que será usada para buscar os posts online
function retrievePostsOnline(): Promise<Object> {
  return retrieveResourceOnline(posts);
}

// função que será usada para buscar os posts no dispositivo
function retrievePostsOffline(): Promise<Object> {
  return retrieveResourceOffline(posts);
}

function savePosts(postArray: Object): Promise<Mixed> {
  return saveResource(posts, postArray);
}

const postActions: {[id: string]: ReduxAction} = {
  addPost: (): ActionObject => ({
      type: actionTypes.addPost,
      payload: {}
  }),
  fetchPosts: () => (dispatch) => {    
    retrievePostsOffline().then((results) => {
      console.log(results);
      if (results !== null) {
        dispatch(postActions.setPosts(results));
      } 
      dispatch(postActions.fetchPostsOnline(results));
    }).catch((err) => tryOnline(null));                             
  },
  fetchPostsOnline: (offlineResults) => (dispatch) => {
    console.log("trying online...");
    retrievePostsOnline().then((results) => {
      if (results !== null) {
        dispatch(postActions.setPosts(results));
        savePosts(results);
      } else {
        if (onlineResult === null) {
          dispatch(postActions.fetchPostsFail());
        }
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
