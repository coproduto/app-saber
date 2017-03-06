/**
 * appNavigator.js: Componente que configura a navegação entre múltiplas telas
 *
 *    Os componentes anteriores realizaram toda a configuração da conexão entre
 *    a interface gráfica e a lógica da aplicação. Resta apenas definir como
 *    e quando devemos realizar transições de telas.
 *
 *    (O componente imediatamente anterior a este é o componente appContainer,
 *     disponível em app/containers/appContainer.js)
 *
 *    Neste módulo, definimos as constantes startRoute e transitionMap.
 *
 *    `startRoute` é uma rota que representa a tela inicial do aplicativo.
 *
 *    `transitionMap` é uma variável que representa as transições entre telas.
 *
 *    Uma "rota" é um objeto que contém uma chave "view", representando qual
 *    a tela que deve ser exibida (para mais informações sobre as telas do
 *    aplicativo, ver o conteúdo da pasta app/components/views/).
 *
 *    O mapa de transições é definido da seguinte forma: Cada tela tem uma chave
 *    com seu nome, associada a um objeto contendo as propriedades 'forward'
 *    e 'back'. A chave 'forward' especifica o nome da tela para qual o usuário
 *    deve seguir após a especificada pela chave ou `null`, caso não seja
 *    possível avançar além da tela em questão. Já a chave 'back' especifica
 *    se é possível voltar para tela anterior (ou seja, se deve aparecer um
 *    botão de retorno no canto superior esquerdo da barra de título)
 *
 *    A classe AppNavigator usa essas variáveis para gerar automaticamente
 *    funções que são passadas para os componentes de tela e, quando chamadas,
 *    realizam as conexões entre telas.
 *
 *    O objeto rota também contém a chave "props", que permite que propriedades
 *    sejam passadas para a próxima tela durante uma transição. O AppNavigator
 *    constroi um objeto de propriedades usando a função JS Object.assign() e
 *    passa essas propriedades para o próximo componente a cada transição.
 *
 *    O mapeamento entre nomes de telas e telas é definido no arquivo
 *    app/components/views/index.js.
 *
 *    A navegação começa pelo componente HomeView, definido em
 *    app/components/views/home.js.
 *
 * @flow
 * @providesModule app-navigator
 *
 **/

import React, { Component } from 'react';
import { Navigator } from 'react-native';
import views from 'views';

type RouteType = { view: string,
                   props: {[id: string]: any} };

const startRoute: RouteType = {
  view: 'home',
  props: {}
};

const transitionMap = {
  home: {
    forward: 'posts',
    back: false
  },
  posts: {
    forward: null,
    back: true
  }
};

export default class AppNavigator extends Component {

  viewForward(navigator: Navigator, view: string) {
    return (props: {[id: string]: any}) => navigator.push({
      view,
      props
    });
  }

  viewBack(navigator: Navigator) {
    return () => navigator.pop();
  }

  renderScene(route: RouteType, navigator: Navigator) {
    const CurrentView = views[route.view];
    const nextView = transitionMap[route.view].forward;
    const canGoBack = transitionMap[route.view].back;

    const navigationProps = {};

    if (nextView !== null) {
      navigationProps.next = this.viewForward(navigator, nextView);
    }
    if (canGoBack) {
      navigationProps.back = this.viewBack(navigator);
    }

    const viewProps = Object.assign({},
                                    this.props,
                                    navigationProps,
                                    route.props);

    return (
      <CurrentView {...viewProps} />
    );
  }

  render() {
    return (
      <Navigator
         initialRoute={ startRoute }
         renderScene={ (route, nav) => this.renderScene(route, nav) }/>
    );
  }
}
