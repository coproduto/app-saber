/**
 * home.js: Tela inicial do aplicativo
 *
 * Este componente renderiza a tela inicial do aplicativo, e é o primeiro
 * componente visível a ser carregado.
 *
 * Quando ele é carregado, ele invoca as ações `fetchPosts`, `fetchUsers`,
 * e `fetchComments`, definidas nos arquivos app/actions/posts.js,
 * app/actions/users.js e app/actions/comments.js, para carregar o conteúdo do
 * aplicativo acessando a API REST e/ou o banco de dados AsyncStorage (caso haja
 * dados disponíveis no banco). No caso, o banco sempre é acessado, e a API é
 * acessada para atualizar os dados caso haja conexão de rede disponível.
 *
 * (Ver os arquivos das ações para maiores detalhes)
 *
 * Enquanto o conteúdo do app está carregando, esta tela renderiza o componente
 * LoadingIndicator, definido em app/componentes/loadingIndicator.js, o que
 * gera um indicador de carregamento na tela. Esse indicador é removido quando
 * o conteúdo é carregado, e a tela passa para o modo normal.
 *
 * A tela renderiza uma lista de Cards contendo os dados de cada post,
 * utilizando componentes da biblioteca NativeBase para apresentar o conteúdo
 * de forma semelhante à nativa independente de plataforma.
 *
 * Quando um card é tocado, ele invoca a função viewForward gerada pelo
 * AppNavigator (ver app/containers/appNavigator.js) para passar para a tela de
 * detalhes do post (definida em app/views/postView.js).
 *
 * @flow
 * @providesModule home-view
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

  //método que é invocado quando o componente é carregado
  //chama as ações de carregamento de conteúdo.
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

  //método que passa para a próxima tela quando invocada
  toPostView(post: PostType) {
    this.props.next({ post });
  }

  //método para tentar o carregamento novamente caso o
  //mesmo falhe
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

  //método que renderiza um item da lista de posts
  renderRow(post: PostType) {
    //nome de usuário do post
    let postUserName = "";
    if (this.orderedUsers.length > post.userId - 1) {
      postUserName = this.orderedUsers[post.userId - 1].name;
    }

    //número de comentários do post
    let commentCount = 0;
    if (this.props.hasComments && this.props.comments.length > 0) {
      commentCount = this.props.comments.filter(
        (comment) => comment.postId === post.id
      ).length;
    }

    //string descrevendo os comentários
    let commentString = "Nenhum comentário";
    if (commentCount > 0) {
      commentString = commentCount.toString() + " comentários";
    }

    //renderização final
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

  //método que renderiza o conteúdo caso este esteja disponível
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

  //método que renderiza uma notificação de erros caso os haja
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

  //método que renderiza a tela inteira
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

//descrições da aparência que cada subcomponente deve ter
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
