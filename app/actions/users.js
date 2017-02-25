/**
 *
 * @providesModule user-actions
 * @flow
 *
 */

import JsonPlaceholderClient from 'json-placeholder-client';
import actionTypes from 'action-types';

import type {
  ReduxAction,
  ActionObject
} from 'flow-types';

const users = new JsonPlaceholderClient().users();

const userActions: {[id: string]: ReduxAction} = {
  fetchUsers: () => (dispatch) =>
    users.all().then((result) => {
      if (result.status === 'success') {
        return result.response;
      }
      dispatch(userActions.fetchUsersFail());

      return null;
    }).then((response) => {
      if (response) {
        dispatch(userActions.setUsers(response));
      }
    }),
  setUsers: (usersArray: Object[]): ActionObject => ({
    type: actionTypes.setUsers,
    payload: usersArray
  }),
  fetchUsersFail: (): ActionObject => ({
    type: actionTypes.fetchUsersFail,
    payload: {}
  })
};


export default userActions;
