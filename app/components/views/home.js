/**
 *
 * @providesModule home-view
 * @flow
 *
 */

import React, { Component } from 'react';
import { Text } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Body,
  Card,
  CardItem,
  Button,
  List,
  ListItem
} from 'native-base';
import LoadingIndicator from 'loading-indicator-component';

type PostType = { userId: number,
                  id: number,
                  title: string,
                  body: string
                }

export default class HomeView extends Component {
  addPost() {
    this.props.addPost();
  }

  componentDidMount() {
    console.log(this.props);
    
    if (!this.props.hasPosts) {
      this.props.fetchPosts();
    }
    if (!this.props.hasUsers) {
      this.props.fetchUsers();
    }
    if (!this.props.hasComments) {
      this.props.fetchComments();
    }
  }

  renderRow(post: PostType) {
    return (
      <ListItem>
        <Card>
          <CardItem>
            <Body>
              <Text>{ post.title }</Text>
              <Text>{ post.body }</Text>
            </Body>
          </CardItem>
        </Card>
      </ListItem>
    );
  }
  
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Prova Prática SABER</Title>
          </Body>
        </Header>
        <Content>
          <LoadingIndicator
             hasUsers={ this.props.hasUsers }
             hasPosts={ this.props.hasPosts }
             hasComments={ this.props.hasComments } />
          <List dataArray={ this.props.posts }
                renderRow={ (item) => this.renderRow(item) } />
        </Content>
      </Container>
    );
  }
}
