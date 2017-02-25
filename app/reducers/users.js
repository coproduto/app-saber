/**
 *
 * @providesModule user-reducers
 *
 */

import createReducer from 'create-reducer';
import types from 'action-types';

const userReducers = {
  users: createReducer([], {
    [types.setUser] (state, action) {
      return action.payload;
    }
  })
};

export default userReducers;
