/**
 * types.js: Índice de tipos de ações
 *
 * Este módulo lista todos os tipos de ação disponíveis para o aplicativo para
 * que ações possam facilmente ser criadas pelos outros módulos da pasta
 * app/actions/, e para que as ações possam facilmente ser identificadas e
 * processadas pelos redutores definidos pelos módulos da pasta app/reducers/.
 *
 * @providesModule action-types
 * @flow
 *
 **/

import type { ReduxActionType } from 'flow-types';

const actionTypes: {[id: string]: ReduxActionType} = {
  setPosts: 'setPosts',
  fetchPostsFail: 'fetchPostsFail',
  savePosts: 'savePosts',
  setUsers: 'setUsers',
  saveUsers: 'saveUsers',
  fetchUsersFail: 'fetchUsersFail',
  setComments: 'setComments',
  saveComments: 'saveComments',
  fetchCommentsFail: 'fetchCommentsFail',
  showLoadingIndicators: 'showLoadingIndicators',
  hideLoadingIndicators: 'hideLoadingIndicators',
  setLoadingPhrase: 'setLoadingPhrase',
  clearErrors: 'clearErrors'
};

export default actionTypes;
