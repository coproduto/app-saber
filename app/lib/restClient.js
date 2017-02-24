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

import type {
  PayloadType,
  ResultType
} from 'restful';

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

  static headers(): Headers {
    return new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });
  }

  static getJson(promise: Promise<Response>): Promise<ResultType> {
    const result: ResultType = {
      status: 'unknown',
      error: null,
      response: null
    };

    const jsonPromise = new Promise((resolve: Function) => {
      promise.then((response: Response) => {
        if (response.ok) {
          result.status = 'success';
          result.response = response.json();
        } else {
          result.status = 'responseError';
          result.error = response.statusText;
        }
        resolve(result);
      }).catch((error: string) => {
        result.status = 'requestError';
        result.error = error;
        resolve(result);
      });
    });

    return jsonPromise;
  }

  _requestWithPayload(resource: string,
                      body: PayloadType,
                      method: string): Promise<Response> {
    const config = {
      method,
      body,
      headers: RestClient.headers()
    };

    return fetch(this.url + resource, config);
  }

  get(resource: string): Promise<Response> {
    const config = { headers: RestClient.headers() };

    return fetch(this.url + resource, config);
  }

  post(resource: string, data: PayloadType): Promise<Response> {
    return this._requestWithPayload(resource, data, 'POST');
  }

  put(resource: string, data: PayloadType): Promise<Response> {
    return this._requestWithPayload(resource, data, 'PUT');
  }

  patch(resource: string, data: PayloadType): Promise<Response> {
    return this._requestWithPayload(resource, data, 'PATCH');
  }

  delete(resource: string, data: PayloadType): Promise<Response> {
    return this._requestWithPayload(resource, data, 'DELETE');
  }
}
