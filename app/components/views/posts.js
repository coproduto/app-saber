/**
 *
 * @providesModule posts-view
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
  Icon,
  Left,
  Right,
  Card,
  CardItem,
  Button,
  List,
  ListItem
} from 'native-base';
import LoadingIndicator from 'loading-indicator-component';

type CommentType = { postId: number,
                     id: number,
                     name: string,
                     email: string,
                     body: string
                   }

export default class PostsView extends Component {
  
  renderRow(comment: CommentType) {
    console.log(comment.email);
    
    return (
      <ListItem>
        <Card>
          <CardItem>
            <Body>
              <Text>{ comment.email }</Text>
              <Text>{ comment.name }</Text>
              <Text>{ comment.body }</Text>
            </Body>
          </CardItem>
        </Card>
      </ListItem>
    );
        
  }
  
  render () {    
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={ this.props.back }>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title> Prova Prática SABER </Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <LoadingIndicator
             hasUsers={ this.props.hasUsers }
             hasPosts={ this.props.hasPosts }
             hasComments={ this.props.hasComments } />
          <List dataArray={ this.props.comments }
                renderRow={ (item) => this.renderRow(item) } />
        </Content>
      </Container>
    );
    /*
               <Card style={{ height: 100, margin: 20 }}>
            <CardItem>
              <Body>
                <View style={{ height: 100 }}
                <Text>{ this.props.postTitle }</Text>
                <Text>{ this.props.postBody }</Text>
                </View>
              </Body>
            </CardItem>
          </Card>
     */
  }
}
