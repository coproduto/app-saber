/**
 *
 * @providesModule app-container
 * @flow
 *
 */

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
    loadingPhrase: state.loadingPhrase
  }),
  mapDispatchToProps
)(AppContainer);
