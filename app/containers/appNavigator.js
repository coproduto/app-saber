/**
 *
 * @providesModule app-navigator
 * @flow
 *
 */

import React, { Component } from 'react';
import { Navigator } from 'react-native';
import views from 'views';

type RouteType = { view: string };

const startRoute: RouteType = { view: 'home' };

export default class AppNavigator extends Component {
  viewForward(navigator: Navigator, view: string) {
    return ({ push: () => navigator.push({ view }) });
  }

  viewBack(navigator: Navigator) {
    return ({ back: () => navigator.pop() });
  }

  renderScene(route: RouteType) {
    const CurrentView = views[route.view];

    return (
      <CurrentView {...this.props} />
    );
  }

  render() {
    return (
      <Navigator
         initialRoute={ startRoute }
         renderScene={ (route) => this.renderScene(route) } />
    );
  }
}
