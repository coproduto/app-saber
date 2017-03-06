/**
 * index.android.js: Ponto de entrada Android
 *
 *     Este arquivo define o primeiro componente carregado pelo aplicativo
 *     quando ele é executado na plataforma Android.
 *
 *     O componente definido neste arquivo é responsável por realizar quaisquer
 *     customizações necessárias para a plataforma Android e passar o controle
 *     para o componente raiz do aplicativo (definido em app/app.js)
 *
 *     Como queremos que o aplicativo funcione de forma igual tanto no Android
 *     quanto no iOS, nenhuma customização é realizada e o controle é passado
 *     imediatamente para o componente raiz (O componente App).
 *
 * @flow
 *
 **/

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from 'saber-app';

export default class Saber extends Component {
  render() {
    return (<App />);
  }
}

AppRegistry.registerComponent('Saber', () => Saber);
