/**
 * errors.js: Redutores de erros
 *
 * Este módulo define os redutores que manipulam as partes do estado do
 * aplicativo que indicam se um erro ocorreu.
 *
 * Os redutores são criados usando a função `createReducer`, disponível em
 * app/lib/createReducer.js.
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
