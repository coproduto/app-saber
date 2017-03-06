/**
 * posts.js: Ações de carregamento e salvamento de posts
 *
 * Este módulo define as ações que a interface gráfica pode usar para carregar
 * posts. O salvamento dos posts no banco de dados AsyncStorage é realizado pela
 * biblioteca PersistentStorage (que faz parte deste aplicativo e está definida
 * em app/lib/persistentStorage.js). Já as ações de acesso à API são realizadas
 * pela biblioteca JsonPlaceholderClient (que também faz parte deste app e está
 * definida em app/lib/jsonPlaceholderClient.js)
 *
 * A ação de carregamento de posts segue o seguinte fluxo:
 *
 * 1. Tenta buscar posts no banco de dados usando a função retrievePostsOffline
 *
 * 2. Caso consiga, passa os posts para a interface e encerra
 *
 * 3. Caso falhe, inicia a ação que busca posts online
 *
 * 4. Caso consiga, salva os posts no banco de dados, passa os posts para a
 * interface e encerra
 *
 * 5. Caso falhe, inicia a ação que avisa à interface que ocorreu um erro.
 *
 * O fluxo das ações aqui definidas é totalmente assíncrono e usa Promises.
 * Para uma explicação da classe Promise e seu uso em sequenciamento de ações
 * assíncronas, ver:
 *
 * developer.mozilla.org/pt-BR/docs/Web/JavaScript/
 *                                      Reference/Global_Objects/Promise
 *
 * @providesModule post-actions
 * @flow
 *
 **/

import actionTypes from 'action-types';
import JsonPlaceholderClient from 'json-placeholder-client';
import Storage from 'persistent-storage';

import type {
  ReduxAction,
  ActionObject
} from 'flow-types';

const posts = new JsonPlaceholderClient().posts();

// função que será usada para buscar os posts online
function retrievePostsOnline(): Promise<Object | null> {
  return Storage.retrieveResourceOnline(posts);
}

// função que será usada para buscar os posts no dispositivo
function retrievePostsOffline(): Promise<Object | null> {
  return Storage.retrieveResourceOffline(posts);
}

function savePosts(postArray: Object): Promise<mixed> {
  return Storage.saveResource(posts, postArray);
}

const postActions: {[id: string]: ReduxAction} = {
  fetchPosts: () => (dispatch) => {
    retrievePostsOffline().then((results) => {
      if (results !== null) {
        dispatch(postActions.setPosts(results));
      }
      dispatch(postActions.fetchPostsOnline(results));
    }).catch(() => dispatch(postActions.fetchPostsOnline(null)));
  },
  fetchPostsOnline: (offlineResults) => (dispatch) => {
    retrievePostsOnline().then((results) => {
      if (results !== null) {
        dispatch(postActions.setPosts(results));
        savePosts(results);
      } else if (offlineResults === null) {
          dispatch(postActions.fetchPostsFail());
        }
      });
  },
  setPosts: (postsArray: Object[]): ActionObject => ({
    type: actionTypes.setPosts,
    payload: postsArray
  }),
  fetchPostsFail: (): ActionObject => ({
    type: actionTypes.fetchPostsFail,
    payload: {}
  })
};

export default postActions;
