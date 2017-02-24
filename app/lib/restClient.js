/**
 * restClient.js: Cliente de API Rest
 *
 *    Este arquivo define uma classe que abstrai operações de acesso a recursos
 *    disponibilizados através de uma API Rest.
 *
 *    As operações de rede são realizadas através do método fetch,
 *    disponibilizado por versões recentes do JavaScript (e pelo React Native) e
 *    documentado aqui:
 *
 *    https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 *
 *    Também há uma explicação em português aqui:
 *
 *    https://braziljs.org/blog/fetch-api-e-o-javascript/
 *
 * @flow
 * @providesModule rest-client
 *
 **/

import 'react-native';

// o tipo do corpo de uma requisição
type PayloadType = string | Object;

export default class RestClient {
  url: string;

  constructor(url: string) {
    this.url = url;

    // queremos garantir que a URL tenha uma barra no final, para que os
    // recursos sejam especificados corretamente.
    if (!this.url.endsWith('/')) {
      this.url = this.url + '/';
    }
  }

  get(resource: string): Promise<mixed> {
    return fetch(this.url + resource);
  }

  put(resource: string, data: PayloadType): Promise<mixed> {
    const config = {
      method: 'PUT',
      body: data
    };

    return fetch(this.url + resource, config);
  }
}
