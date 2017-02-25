/**
 *
 * @providesModule comment-actions
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

const comments = new JsonPlaceholderClient().comments();

function retrieveCommentsOnline(): Promise<Object | null> {
  return Storage.retrieveResourceOnline(comments);
}

function retrieveCommentsOffline(): Promise<Object | null> {
  return Storage.retrieveResourceOffline(comments);
}

function saveComments(commentArray: Object): Promise<mixed> {
  return Storage.saveResource(comments, commentArray);
}

const commentActions: {[id: string]: ReduxAction} = {
  fetchComments: () => (dispatch) => {
    retrieveCommentsOffline().then((results) => {
      if (results !== null) {
        dispatch(commentActions.setComments(results));
      }
      dispatch(commentActions.fetchCommentsOnline(results));
    }).catch(() => commentActions.fetchCommentsOnline(null));
  },
  fetchCommentsOnline: (offlineResults) => (dispatch) => {
    retrieveCommentsOnline().then((results) => {
      if (results !== null) {
        dispatch(commentActions.setComments(results));
        saveComments(results);
      } else if (offlineResults === null) {
          dispatch(commentActions.fetchCommentsFail());
        }
      });
  },
  setComments: (commentsArray: Object[]): ActionObject => ({
    type: actionTypes.setComments,
    payload: commentsArray
  }),
  fetchCommentsFail: (): ActionObject => ({
    type: actionTypes.fetchCommentsFail,
    payload: {}
  })
};

export default commentActions;
