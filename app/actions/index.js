/**
 * index.js: Índice de ações
 *
 * Este componente meramente agrega todas as ações que estão disponíveis à
 * interface gráfica do aplicativo e os disponibiliza como um único objeto
 * para facilitar o carregamento por outros componentes do aplicativo.
 *
 * As ações estão definidas nos outros arquivos da pasta app/actions/.
 *
 * @providesModule actions
 * @flow
 *
 **/

import postActions from 'post-actions';
import commentActions from 'comment-actions';
import userActions from 'user-actions';
import errorActions from 'error-actions';

import type { ReduxAction } from 'flow-types';

const actions: {[id: string]: ReduxAction} = Object.assign(
  {},
  postActions,
  commentActions,
  userActions,
  errorActions
);

export default actions;
