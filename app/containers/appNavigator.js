/**
 *
 * @providesModule app-navigator
 * @flow
 *
 */

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
