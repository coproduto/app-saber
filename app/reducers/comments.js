/**
 * comments.js: Redutores de comentários
 *
 * Este módulo define os redutores que manipulam a parte do estado do aplicativo
 * referente aos comentários do conteúdo.
 *
 * Os redutores são criados usando a função `createReducer`, disponível em
 * app/lib/createReducer.js.
 *
 * @providesModule comment-reducers
 *
 **/

import createReducer from 'create-reducer';
import types from 'action-types';

const commentReducers = {
  comments: createReducer([], {
    [types.setComments] (state, action) {
      return action.payload;
    }
  })
};

export default commentReducers;
