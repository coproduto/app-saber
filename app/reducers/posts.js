/**
 * posts.js: Redutores de posts
 *
 * Este módulo define os redutores que manipulam a parte do estado do aplicativo
 * referente aos posts do conteúdo.
 *
 * Os redutores são criados usando a função `createReducer`, disponível em
 * app/lib/createReducer.js.
 *
 * @providesModule post-reducers
 *
 **/

import createReducer from 'create-reducer';
import types from 'action-types';

const postReducers = {
  posts: createReducer([], {
    [types.setPosts] (state, action) {
      return action.payload;
    }
  })
};

export default postReducers;
