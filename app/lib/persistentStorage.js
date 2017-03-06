/**
 * persistentStorage.js: Biblioteca de abstração do armazenamento persistente.
 *
 * No React Native, o armazenamento persistente é provido pela classe
 * AsyncStorage, a qual abstrai os bancos de dados disponíveis tanto no iOS
 * quanto no Android. Esta biblioteca, além de abstrair o armazenamento
 * persistente e gerenciar uma série de chaves de armazenamento, abstrai o
 * acesso a recursos da API de forma tal que eles possam ser acessados de
 * forma uniforme pelas ações do aplicativo, independente dos dados serem
 * buscados no banco de dados ou online.
 *
 * Os dados são sempre salvos no banco como strings JSON.
 *
 * Esta biblioteca usa extensivamente objetos Promise. Para maiores referências,
 * ver:
 *
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/
 *                                              Reference/Global_Objects/Promise
 *
 * @providesModule persistent-storage
 * @flow
 *
 */

import { Resource } from 'json-placeholder-client';
import { AsyncStorage } from 'react-native';

const store = '@SaberStore';

function makeKey(name: string): string {
  return store + ':' + name;
}

export default class PersistentStorage {

  // criar promessa que busca dados online
  static retrieveResourceOnline(resource: Resource): Promise<Object | null> {
    return new Promise((resolve) => {
      resource.all().then((result) => {
        if (result.status === 'success') {
          return result.response;
        }

        return null;
      }).then((response) => {
        resolve(response);
      }).catch(() => {
        resolve(null);
      });
    });
  }

  // criar promessa que busca dados no banco de dados
  static retrieveResourceOffline(resource: Resource): Promise<Object | null> {
    const path = makeKey(resource.name());

    return new Promise((resolve) =>
                       AsyncStorage.getItem(path)
                         .then((item) => {
                           const itemValue = JSON.parse(item);

                           resolve(itemValue);
                         }).catch(() => {
                           resolve(null);
                         })
                      );
  }

  // criar promessas que salva dados no banco de dados
  static saveResource(resource: Resource, value: Object): Promise<mixed> {
    const path = makeKey(resource.name());

    const promise = new Promise((resolve) =>
                                AsyncStorage
                                .setItem(path, JSON.stringify(value))
                                .then(resolve(true))
                                .catch(() => resolve(false))
                               );

    return promise;
  }
}

