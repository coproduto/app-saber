/**
 *
 * @providesModule home-view
 * @flow
 *
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
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
import LoadingIndicator from 'loading-indicator-component';

type PostType = { userId: number,
                  id: number,
                  title: string,
                  body: string
                };

type UserType = { id: number,
                  name: string,
                  email: string,
                  address: Object,
                  phone: string,
                  website: string,
                  company: Object
                };

export default class HomeView extends Component {
  orderedUsers: UserType[];
  
  componentDidMount() {
    this.orderedUsers = [];
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

  toPostView(post: PostType) {
    this.props.next({ post });
  }

  retryLoad() {
    this.props.clearErrors();
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
    let postUserName = "";
    if (this.orderedUsers.length > post.userId - 1) {
      postUserName = this.orderedUsers[post.userId - 1].name;
    }

    let commentCount = 0;
    if (this.props.hasComments && this.props.comments.length > 0) {
      commentCount = this.props.comments.filter(
        (comment) => comment.postId === post.id
      ).length;
    }

    let commentString = "Nenhum comentário";
    if (commentCount > 0) {
      commentString = commentCount.toString() + " comentários";
    }
    
    return (
      <ListItem>
        <Card>
          <CardItem button onPress={ () => { this.toPostView(post); } }>
            <Body>
              <View style={styles.postCard}>
                <View style={styles.authorView}>
                  <Text style={styles.author}>{ postUserName + ' postou:' }</Text>
                </View>
                <View style={styles.titleView}>
                  <Text style={styles.title}>{ post.title }</Text>
                </View>
                <View style={styles.bodyView}>
                  <Text style={styles.body}>{ post.body }</Text>
                </View>
                <View style={styles.commentsView}>
                  <Text style={styles.comments}>{ commentString }</Text>
                </View>
              </View>
            </Body>
          </CardItem>
        </Card>
      </ListItem>
    );
  }

  renderContent() {
    if (this.props.hasPosts &&
        this.props.hasComments &&
        this.props.hasUsers &&
        this.props.users.length > 0 &&
        this.props.comments.length > 0 &&
        this.props.posts.length > 0 &&
        !this.props.errors) {
      return (
        <View>
          <View style={styles.header}>
            <Text style={styles.headerText}>Posts recentes</Text>
          </View>
          <View style={styles.separator} />
          <List dataArray={ this.props.posts }
                renderRow={ (item) => this.renderRow(item) } />
        </View>
      );
    }
    return null;
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <View>
          <Card>
            <CardItem button onPress={ () => { this.retryLoad(); } }>
              <Body>
                <View style={styles.error}>
                  <Text style={styles.errorText}>Erro carregando conteúdo.</Text>
                  <Text style={styles.errorText}>Toque aqui para tentar novamente.</Text>
                </View>
              </Body>
            </CardItem>
          </Card>
        </View>
      );
    }
    return null;
  }
  
  render() {
    if(this.props.hasUsers) {
      this.orderedUsers = this.props.users.sort((a,b) =>
                                                (a.userId < b.userId) ? -1 : 1);
    }
    
    return (
      <Container>
        <Header>
          <Body>
            <Title>Prova Prática SABER</Title>
          </Body>
        </Header>
        <Content>
          
        <LoadingIndicator
           posts={ this.props.posts }
           comments={ this.props.comments}
           users={ this.props.users }
           hasUsers={ this.props.hasUsers }
           hasPosts={ this.props.hasPosts }
           hasComments={ this.props.hasComments }
           errors={ this.props.errors } />

        { this.renderErrors() }
        { this.renderContent() }
        
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#AAAAAA',
    height: StyleSheet.hairlineWidth,
    alignSelf: 'stretch'
  },
  header: { margin: 10 },
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15
  },
  postCard: { padding: 20 },
  titleView: {
    margin: 5,
    marginBottom: 15
  },
  authorView: { alignItems: 'flex-start' },
  commentsView: { alignItems: 'flex-start' },
  bodyView: { margin: 5 },
  title: {
    fontWeight: 'bold',
    fontSize: 24
  },
  author: {
    fontWeight: 'bold',
    fontSize: 12
  },
  body: {
    textAlign: 'justify',
    fontSize: 15
  },
  comments: {
    fontWeight: 'bold',
    fontSize: 12
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  errorText: {
    textAlign: 'center',
    fontSize: 20
  }
});
