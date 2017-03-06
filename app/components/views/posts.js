/**
 * posts.js: Tela de exibição de postagem específica
 *
 * Este componente é acessado a partir da tela inicial (definida em
 * /app/components/views/home.js) e define a tela que exibe um único post e seus
 * respectivos comentários.
 *
 * Esta tela não realiza carregamento de conteúdo, visto que a tela anterior já
 * inicia as ações de carregamento de conteúdo: Ela apenas define,
 * declarativamente, como o conteúdo deve ser exibido.
 *
 * @flow
 * @providesModule posts-view
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

type UserType = { id: number,
                  name: string,
                  email: string,
                  address: Object,
                  phone: string,
                  website: string,
                  company: Object
                };


export default class PostsView extends Component {
  orderedUsers: UserType[];

  //no construtor atribuímos uma lista vazia para que o aplicativo não
  //feche se a tela for aberta sem conteúdo.
  constructor(props: Object) {
    super(props);
    this.orderedUsers = [];
  }

  //método que renderiza um único comentário
  renderRow(comment: CommentType) {
    return (
      <ListItem>
        <Card>
          <CardItem>
            <Body>
              <View style={styles.emailView}>
                <Text style={styles.email}>{ comment.email }</Text>
              </View>
              <View style={styles.nameView}>
                <Text style={styles.name}>{ comment.name }</Text>
              </View>
              <View style={styles.bodyView}>
                <Text style={styles.body}>{ comment.body }</Text>
              </View>
            </Body>
          </CardItem>
        </Card>
      </ListItem>
    );
  }

  //método que renderiza a tela completa
  render () {
    if(this.props.hasUsers) {
      this.orderedUsers = this.props.users.sort((a,b) =>
                                                (a.userId < b.userId) ? -1 : 1);
    }

    let postUserName = "";
    if (this.orderedUsers.length > this.props.post.userId - 1) {
      postUserName = this.orderedUsers[this.props.post.userId - 1].name;
    }

    let postComments = [];
    if (this.props.hasComments && this.props.comments.length > 0) {
      postComments = this.props.comments.filter(
        (comment) => comment.postId === this.props.post.id
      );
    }
      
    
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={ this.props.back }>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Comentários</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <LoadingIndicator
           posts={ this.props.posts }
           comments={ this.props.comments}
           users={ this.props.users }
           hasUsers={ this.props.hasUsers }
           hasPosts={ this.props.hasPosts }
           hasComments={ this.props.hasComments } />
        
          <View style={{ flex: 1 }}>
            <Card>
              <CardItem>
                <Body>
                  <View style={styles.post}>
                    <View style={styles.authorView}>
                      <Text style={styles.author}>{postUserName}</Text>
                    </View>
                    <View style={styles.titleView}>
                      <Text style={styles.title}>{ this.props.post.title }</Text>
                    </View>
                    <View style={styles.separator} />
                    <View style={styles.bodyView}>
                      <Text style={styles.body}>{ this.props.post.body }</Text>
                    </View>
                  </View>
                </Body>
              </CardItem>
            </Card>
          </View>
          <View style={{ flex: this.props.comments.length }}>
            <List dataArray={ postComments }
                  renderRow={ (item) => this.renderRow(item) } />
          </View>
        </Content>
      </Container>
    );
  }
}

//estilos dos componentes
const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#AAAAAA',
    height: StyleSheet.hairlineWidth,
    alignSelf: 'stretch'
  },
  post: { padding: 10 },
  titleView: {
    margin: 5,
    marginBottom: 10
  },
  authorView: { alignItems: 'flex-start' },
  commentsView: { alignItems: 'flex-start' },
  bodyView: { margin: 5 },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  },
  author: {
    fontWeight: 'bold',
    fontSize: 12
  },
  body: {
    textAlign: 'justify',
    fontSize: 16
  },
  emailView: { marginBottom: 5 },
  name: { fontWeight: 'bold' }
});

