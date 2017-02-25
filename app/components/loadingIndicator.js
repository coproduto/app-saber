/**
 *
 * @providesModule loading-indicator-component
 *
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
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
        <View style={styles.container}>
          <View style={styles.loadingView}>
            <Text style={styles.loadingText}>
              { (() => this.loadingPhrase())() }
            </Text>
          </View>
          <Spinner type="ChasingDots"
                   color="#2874F0"
                   size={80} />
        </View>
      );
    }

    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 200
  },
  loadingView: { margin: 20 },
  loadingText: { fontSize: 20 }
});
