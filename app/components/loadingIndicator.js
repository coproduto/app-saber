/**
 *
 * @providesModule loading-indicator-component
 *
 */

import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import Spinner from 'react-native-spinkit';

export default class LoadingIndicator extends Component {

  loadingPhrase(): string {
    if (!this.props.hasPosts) {
      return 'Carregando postagens...';
    }

    if (!this.props.hasComments) {
      return 'Carregando comentários...';
    }

    if (!this.props.hasUsers) {
      return 'Carregando...';
    }

    return '';
  }

  render() {
    if (!(this.props.hasPosts &&
          this.props.hasUsers &&
          this.props.hasComments &&
          this.props.users.length &&
          this.props.comments.length &&
          this.props.posts.length) &&
        (!(this.props.errors))) {
      return (
        <View>
          <Text>{ (() => this.loadingPhrase())() }</Text>
          <Spinner type="ThreeBounce"
                   color="#CCCCCC" />
        </View>
      );
    }

    return null;
  }
}
