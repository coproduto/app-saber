
import 'react-native';
import JsonPlaceholderClient, { Resource } from 'json-placeholder-client';

// caso por algum motivo o pedido não seja realizado, vamos levantar um erro.
function fail() {
  throw new Error('Network request failed.');
}

beforeEach(() => {
  client = new JsonPlaceholderClient();

  _fetch = global.fetch;
  global.fetch = require('jest-fetch-mock');
});

afterEach(() => {
  global.fetch = _fetch;
});

it('creates post resource', () => {
  const res = client.posts();

  expect(res).toBeInstanceOf(Resource);
});

it('creates comment resource', () => {
  const res = client.comments();

  expect(res).toBeInstanceOf(Resource);
});

it('creates album resource', () => {
  const res = client.albums();

  expect(res).toBeInstanceOf(Resource);
});

it('creates photo resource', () => {
  const res = client.photos();

  expect(res).toBeInstanceOf(Resource);
});

it('creates todo resource', () => {
  const res = client.todos();

  expect(res).toBeInstanceOf(Resource);
});

it('creates user resource', () => {
  const res = client.users();

  expect(res).toBeInstanceOf(Resource);
});

it('gets all posts', (done) => {
  const fakeBody = '[{"userId":1,"id":1,"title":"fklahsa","body":"tqwerqwet"}]';
  fetch.mockResponseOnce(fakeBody);
  
  const posts = client.posts();
  posts.all().then((result) => {
    expect(result.status).toBe('success');
    return result.response;
  }).then((json) => {
    expect(json).toEqual(JSON.parse(fakeBody));
    done();
  }).catch(() => {
    fail();
  });
});
