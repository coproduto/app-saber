/**
 *
 * @providesModule persistent-storage
 * @flow
 *
 */

import { Resource } from 'json-placeholder-client';
import { AsyncStorage } from 'react-native';

const store = '@SaberStore';

export default class PersistentStorage {
  static makeKey(name: string): string {
    return store + ':' + name;
  }

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

  static retrieveResourceOffline(resource: Resource): Promise<Object | null> {
    return new Promise((resolve) =>
                       AsyncStorage.getItem(this.makeKey(resource.name))
                         .then((item) => {
                           const itemValue = JSON.parse(item);

                           resolve(itemValue);
                         }).catch(() => {
                           resolve(null);
                         })
                      );
  }

  static saveResource(resource: Resource, value: Object): Promise<mixed> {
    const promise = new Promise((resolve) =>
                                AsyncStorage
                                .setItem(this.makeKey(resource.name),
                                         JSON.stringify(value))
                                .then(resolve(true))
                                .catch(() => resolve(false))
                               );

    return promise;
  }
}

