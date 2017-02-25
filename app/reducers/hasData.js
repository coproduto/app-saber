/**
 *
 * @providesModule has-data-reducers
 * @flow
 *
 */

import createReducer from 'create-reducer';
import types from 'action-types';

const hasDataReducers = {
  hasUsers: createReducer(false, {
    [types.setUsers] () {
      return true;
    }
  }),
  hasPosts: createReducer(false, {
    [types.setPosts] () {
      return true;
    }
  }),
  hasComments: createReducer(false, {
    [types.setComments] () {
      return true;
    }
  })
};

export default hasDataReducers;
