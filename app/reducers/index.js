/**
 * index.js: Índice de redutores
 *
 * Este componente agrega todos os redutores que manipulam o estado do
 * aplicativo e os combina em um único objeto utilizando a função
 * `combineReducers`, facilitando o carregamento dos redutores por outros
 * componentes.
 *
 * Os redutores estão definidos nos outros arquivos da pasta app/reducers/.
 *
 * @providesModule reducers
 *
 **/

import { combineReducers } from 'redux';

import PostReducers from 'post-reducers';
import CommentReducers from 'comment-reducers';
import UserReducers from 'user-reducers';
import ErrorReducers from 'error-reducers';

const reducers = combineReducers(
  Object.assign(
    {},
    PostReducers,
    CommentReducers,
    UserReducers,
    ErrorReducers
  )
);

export default reducers;

