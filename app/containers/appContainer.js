/**
 * appContainer.js: Componente que disponibiliza ações e variáveis de estado
 *                  aos seus descendentes
 *
 *     No componente anterior (o componente App, disponível em app/app.js), nós
 *     criamos a infra-estrutura de estado Flux através do framework Redux, e
 *     passamos o controle para este componente. Agora, o componente
 *     AppContainer irá usar a função `bindActionCreators` do framework Redux
 *     para disponibilizar as ações que os componentes da interface gráfica
 *     podem utilizar para manipular o estado da aplicação.
 *
 *     As ações são criadas pela função `bindActionCreators`, e
 *     disponibilizadas ao componente através da função `connect` do
 *     framework React Redux. Essa função também disponibiliza as partes
 *     do estado da aplicação que a interface gráfica precisa exibir.
 *
 *     Finalmente, tanto as ações quanto as variáveis de estado são passadas
 *     para o componente AppNavigator através da notação `...this.props`.
 *
 *     A execução do aplicativo continua no componente AppNavigator, disponível
 *     em app/containers/appNavigator.js, o qual é responsável por configurar a
 *     navegação entre múltiplas telas.
 *
 * @flow
 * @providesModule app-container
 *
 **/

import React, { Component } from 'react';
import AppNavigator from 'app-navigator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreators from 'actions';

// aqui criamos a função que irá gerenciar
// a execução de ações dentro do aplicativo
function mapDispatchToProps(dispatch: Function): Object {
  return bindActionCreators(actionCreators, dispatch);
}

class AppContainer extends Component {
  render() {
    return (
      <AppNavigator {...this.props} />
    );
  }
}

// finalmente, exportamos o componente conectado ao backend.
export default connect(
  (state) => ({
    users: state.users,
    posts: state.posts,
    comments: state.comments,
    hasUsers: state.hasUsers,
    hasPosts: state.hasPosts,
    hasComments: state.hasComments,
    loadingPhrase: state.loadingPhrase,
    errors: state.errors
  }),
  mapDispatchToProps
)(AppContainer);
