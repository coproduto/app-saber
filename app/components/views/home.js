/**
 *
 * @providesModule home-view
 * @flow
 *
 */

import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
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
import Spinner from 'react-native-spinkit';

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
    this.props.showLoadingIndicators();
    this.props.fetchPosts();
    this.props.fetchUsers();
    this.props.fetchComments();
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
          <Spinner type='ThreeBounce'
                   color='#CCCCCC'
                   isVisible={ this.props.showLoadingIndicators }/>
          
          <List dataArray={ this.props.posts }
                renderRow={ (item) => this.renderRow(item) }>            
          </List>          
        </Content>
      </Container>
    );
  }
}
