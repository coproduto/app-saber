/**
 *
 * @providesModule error-reducers
 * @flow
 *
 */

import createReducer from 'create-reducer';
import types from 'action-types';

const errorReducers = {
  errors: createReducer(false, {
    [types.fetchUsersFail] () {
      return true;
    },
    [types.fetchCommentsFail] () {
      return true;
    },
    [types.fetchPostsFail] () {
      return true;
    },
    [types.clearErrors] () {
      return false;
    }
  })
};

export default errorReducers;
