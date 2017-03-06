/**
 * views.js: Associação entre nomes de telas e componentes que
 *           renderizam as telas
 *
 *     Este módulo exporta um único objeto constante, o qual associa os
 *     componentes que representam telas do aplicativo (ou seja, os outros
 *     componentes definidos por arquivos contidos na pasta
 *     app/components/views/) com strings representando o nome da tela.
 *
 *     Assim, por exemplo, em componentes que precisem acessar esses
 *     componentes, eles podem ser acessados como:
 *
 *     import views from 'views';
 *
 *     const view = views['nome_da_tela'];
 *
 *     para ver propriedades de cada tela específica, ver nos arquivos
 *     app/components/views/(nome_da_tela + View).js.
 *
 * @flow
 * @providesModule views
 *
 **/

import HomeView from 'home-view';
import PostsView from 'posts-view';

const views = {
  home: HomeView,
  posts: PostsView
};

export default views;
