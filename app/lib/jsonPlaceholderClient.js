/**
 *
 * @providesModule json-placeholder-client
 *
 */

import 'react-native';
import RestClient from 'rest-client';

import type {
  ResultType,
  Restful
} from 'restful';

const root = 'http://jsonplaceholder.typicode.com';

export class Resource {
  resourceName: string;
  rest: Restful;

  constructor(client: Restful, resource: string) {
    this.rest = client;
    this.resourceName = resource;
  }

  name(): string {
    return this.resourceName;
  }

  all(): Promise<ResultType> {
    return RestClient.getJson(this.rest.get(this.resourceName));
  }

  single(id): Promise<ResultType> {
    return RestClient.getJson(this.rest.get(this.resourceName + '/' + id));
  }
}

export default class JsonPlaceholderClient {
  rest: RestClient;

  constructor() {
    this.rest = new RestClient(root);
  }

  posts(): Resource {
    return new Resource(this.rest, 'posts');
  }

  comments(): Resource {
    return new Resource(this.rest, 'comments');
  }

  albums(): Resource {
    return new Resource(this.rest, 'albums');
  }

  photos(): Resource {
    return new Resource(this.rest, 'photos');
  }

  todos(): Resource {
    return new Resource(this.rest, 'todos');
  }

  users(): Resource {
    return new Resource(this.rest, 'users');
  }
}
