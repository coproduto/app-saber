/**
 *
 * @providesModule app-container
 * @flow
 *
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreators from 'actions';

// aqui criamos a função que irá gerenciar
// a execução de ações dentro do aplicativo
function mapDispatchToProps(dispatch: Function): Object {
  return bindActionCreators(actionCreators, dispatch);
}

class AppContainer extends Component {
  addPost() {
    this.props.addPost();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the SABER challenge app!

          Post count: { this.props.postCount }
        </Text>
        <TouchableHighlight onPress={ () => this.addPost() }>
          <Text>Add post</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// finalmente, exportamos o componente conectado ao backend.
export default connect(
  (state) => ({ postCount: state.postCount }),
  mapDispatchToProps
)(AppContainer);
