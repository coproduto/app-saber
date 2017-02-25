/**
 *
 * @providesModule comment-actions
 * @flow
 *
 */

import JsonPlaceholderClient from 'json-placeholder-client';
import actionTypes from 'action-types';

import type {
  ReduxAction,
  ActionObject
} from 'flow-types';

const comments = new JsonPlaceholderClient().comments();

const commentActions: {[id: string]: ReduxAction} = {
  fetchComments: () => (dispatch) =>
    comments.all().then((result) => {
      if (result.status === 'success') {
        return result.response;
      }
        dispatch(commentActions.fetchUsersFail());

        return null;
    }).then((response) => {
      if (response) {
        dispatch(commentActions.setComments(response));
      }
    }),
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
