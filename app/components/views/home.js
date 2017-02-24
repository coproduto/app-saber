/**
 *
 * @providesModule home-view
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

export default class HomeView extends Component {
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
