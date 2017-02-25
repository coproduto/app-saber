/**
 *
 * @providesModule comment-reducers
 *
 */

import createReducer from 'create-reducer';
import types from 'action-types';

const commentReducers = {
  comments: createReducer([], {
    [types.setComments] (state, action) {
      return action.payload;
    }
  })
};

export default commentReducers;
