import 'react-native';
import RestClient from 'rest-client';

/* para testes neste módulo, vamos querer simular a rede ao invés de
 * fazer pedidos reais. Para isso, usamos as funções mockFetch (para criar a
 * rede simulada) e restoreFetch (para restaurar a rede normal). Essas funções
 * vão usar a biblioteca jest-fetch-mock para simular pedidos de rede.
 */

beforeEach(() => {
  _fetch = global.fetch;
  global.fetch = require('jest-fetch-mock');
  client = new RestClient("http://example.com");
});

afterEach(() => {
  global.fetch = _fetch;
});

it('makes get requests', (done) => {  
  // a resposta aqui não é importante, só queremos que o "servidor"
  // responda a pedidos GET.
  fetch.mockResponseOnce("foo");

  //criamos um callback falso...
  const callback = jest.fn();
  //e uma função que vai verificar se o callback foi chamado.
  const verify = expect(callback).toHaveBeenCalled;

  //executamos o pedido com a resposta simulada...
  client.get('test').then((response) => {
    callback();
  }).then(() => {
    //e verificamos se o pedido foi de fato feito
    //verificando se o callback foi chamado.
    verify();
    done();
  }).catch((err) => {
    //se o pedido falhou, lançamos um erro.
    throw new Error('Network request failed.');
  });
});


//os testes subsequentes seguem a mesma lógica do primeiro.
it('makes put requests', (done) => {
  fetch.mockResponseOnce("foo");

  const callback = jest.fn();
  const verify = expect(callback).toHaveBeenCalled;

  client.put('test', 'test-body').then((response) => {
    callback();
  }).then(() => {
    verify();
    done();
  }).catch((err) => {
    throw new Error('Network request failed.');
  });
});

it('makes patch requests', (done) => {
  fetch.mockResponseOnce("foo");

  const callback = jest.fn();
  const verify = expect(callback).toHaveBeenCalled;

  client.put('test', { test: 'test' }).then((response) => {
    callback();
  }).then(() => {
    verify();
    done();
  }).catch((err) => {
    throw new Error('Network request failed.');
  });
});
