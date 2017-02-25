/**
 *
 * @providesModule user-actions
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

const users = new JsonPlaceholderClient().users();

function retrieveUsersOnline(): Promise<Object | null> {
  return Storage.retrieveResourceOnline(users);
}

function retrieveUsersOffline(): Promise<Object | null> {
  return Storage.retrieveResourceOffline(users);
}

function saveUsers(userArray: Object): Promise<mixed> {
  return Storage.saveResource(users, userArray);
}

const userActions: {[id: string]: ReduxAction} = {
  fetchUsers: () => (dispatch) => {
    retrieveUsersOffline().then((results) => {
      if (results !== null) {
        dispatch(userActions.setUsers(results));
      }
      dispatch(userActions.fetchUsersOnline(results));
    }).catch(() => userActions.fetchUsersOnline(null));
  },
  fetchUsersOnline: (offlineResults) => (dispatch) => {
    retrieveUsersOnline().then((results) => {
      if (results !== null) {
        dispatch(userActions.setUsers(results));
        saveUsers(results);
      } else if (offlineResults === null) {
          dispatch(userActions.fetchUsersFail());
        }
      });
  },
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
