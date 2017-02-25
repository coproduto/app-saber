/**
 *
 * @providesModule post-reducers
 *
 */

import createReducer from 'create-reducer';
import types from 'action-types';

const postReducers = {
  posts: createReducer([], {
    [types.setPosts] (state, action) {
      return action.payload;
    }
  })
};

export default postReducers;
