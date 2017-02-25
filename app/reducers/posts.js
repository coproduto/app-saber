/**
 *
 * @providesModule post-reducers
 *
 */

import createReducer from 'create-reducer';
import types from 'action-types';

const postReducers = {
  postCount: createReducer(0, {
    [types.addPost] (state) {
      return state + 1;
    }
  }),
  posts: createReducer([], {
    [types.setPosts] (state, action) {
      return action.payload;
    }
  })
};

export default postReducers;
