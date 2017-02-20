/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from 'saber-app';

export default class Saber extends Component {
  render() {
    return (<App />);
  }
}

AppRegistry.registerComponent('Saber', () => Saber);
