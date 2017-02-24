/**
 * app.js: Ponto de entrada do aplicativo
 *
 *     A execução do aplicativo começa com o carregamento deste componente, o qual
 *     por sua vez é responsável por criar a infra-estutura de gerenciamento de estado
 *     da arquitetura Redux e passar o controle para o próximo componente.
 *
 * @flow
 * @providesModule saber-app
 *
 **/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose
} from 'redux';
import createLogger from 'redux-logger';
import reducers from 'reducers';

//criamos um logger Redux e especificamos que ele vai funcionar para todas
//as ações quando o app estiver em modo de desenvolvimento.
const loggerMiddleware = createLogger(
  { predicate: (getState, action) => __DEV__ }
);

//e criamos uma configurção para inicializar o estado do aplicativo
//e adicionar middlewares necessário a ele.
function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      loggerMiddleware
    )
  );
  return createStore(reducers, initialState, enhancer);
}

//finalmente, geramos o objeto de estado.
const store = configureStore({});

class AppContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the SABER challenge app!
        </Text>
      </View>
    );
  }
}

//a classe App conecta o aplicativo com o backend Redux.
export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <AppContainer />
      </Provider>
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
