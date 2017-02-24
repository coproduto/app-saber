import 'react-native';
import RestClient from 'rest-client';

/* para testes neste módulo, vamos querer simular a rede ao invés de
 * fazer pedidos reais. Para isso, usamos as funções mockFetch (para criar a
 * rede simulada) e restoreFetch (para restaurar a rede normal). Essas funções
 * vão usar a biblioteca jest-fetch-mock para simular pedidos de rede.
 */

// caso por algum motivo o pedido não seja realizado, vamos levantar um erro.
function fail() {
  throw new Error('Network request failed.');
}

beforeEach(() => {
  _fetch = global.fetch;
  global.fetch = require('jest-fetch-mock');

  // preparação: criamos o cliente, criamos uma
  // resposta falsa e um callback falso.
  client = new RestClient("http://example.com");
  
  fetch.mockResponseOnce("foo");
  callback = jest.fn();

  // finalmente, criamos uma função que vai verificar
  // se o callback falso é chamado.
  verify = expect(callback).toHaveBeenCalled;
});

//depois dos testes, restauramos o objeto fetch real.
afterEach(() => {
  global.fetch = _fetch;
});

it('makes get requests', (done) => {  
  // executamos o pedido com a resposta simulada...
  client.get('test').then((response) => {
    callback();
  }).then(() => {
    // e verificamos se o pedido foi de fato feito
    // verificando se o callback foi chamado.
    verify();
    done();
  }).catch((err) => {
    // se o pedido falhou, lançamos um erro.
    fail();
  });
});


// os testes subsequentes seguem a mesma lógica do primeiro.
it('makes post requests', (done) => {
  client.put('test', 'test-body').then((response) => {
    callback();
  }).then(() => {
    verify();
    done();
  }).catch((err) => {
    fail();
  });
});

it('makes put requests', (done) => {
  client.put('test', 'test-body').then((response) => {
    callback();
  }).then(() => {
    verify();
    done();
  }).catch((err) => {
    fail();
  });
});

it('makes patch requests', (done) => {
  client.patch('test', { test: 'test' }).then((response) => {
    callback();
  }).then(() => {
    verify();
    done();
  }).catch((err) => {
    fail();
  });
});

it('makes delete requests', (done) => {
  client.delete('test', { test: 'test' }).then((response) => {
    callback();
  }).then(() => {
    verify();
    done();
  }).catch((err) => {
    fail();
  });
});
