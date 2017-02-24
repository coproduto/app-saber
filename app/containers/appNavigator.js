/**
 *
 * @providesModule app-navigator
 * @flow
 *
 */

import React, { Component } from 'react';
import { Navigator } from 'react-native';
import views from 'views';

const startRoute = { view: 'home' };

export default class AppNavigator extends Component {
  renderScene(route) {
    const CurrentView = views[route.view];
    return(
      <CurrentView {...this.props} />
    );
  }
  
  render() {
    return(
      <Navigator
         initialRoute={ startRoute }
         renderScene={ (route) => this.renderScene(route) } />
    );
  }
}
