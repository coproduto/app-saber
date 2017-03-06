/**
 * users.js: Redutores de usuários
 *
 * Este módulo define os redutores que manipulam a parte do estado do aplicativo
 * referente aos usuários do conteúdo.
 *
 * Os redutores são criados usando a função `createReducer`, disponível em
 * app/lib/createReducer.js.
 *
 * @providesModule user-reducers
 *
 **/

import createReducer from 'create-reducer';
import types from 'action-types';

const userReducers = {
  users: createReducer([], {
    [types.setUsers] (state, action) {
      return action.payload;
    }
  })
};

export default userReducers;
