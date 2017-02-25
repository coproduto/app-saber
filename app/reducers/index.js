/**
 *
 * @providesModule reducers
 *
 */

import { combineReducers } from 'redux';

import PostReducers from 'post-reducers';
import CommentReducers from 'comment-reducers';
import UserReducers from 'user-reducers';
import HasDataReducers from 'has-data-reducers';

const reducers = combineReducers(
  Object.assign(
    {},
    PostReducers,
    CommentReducers,
    UserReducers,
    HasDataReducers
  )
);

export default reducers;

