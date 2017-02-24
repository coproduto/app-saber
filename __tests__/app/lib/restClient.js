import 'react-native';
import RestClient from 'rest-client';

/* Para testes neste módulo, vamos fazer pedidos reais.
 * Caso, por algum motivo, o computador rodando os testes
 * esteja sem internet, estes testes serão pulados e um
 * aviso será exibido.
 */

beforeEach(() => {
  client = new RestClient("http://example.com");
  testUrl = "http://example.com/test";
});

function networkErrorMessage(test, error) {
  console.log('Test ' + test + ' could not be run: ');
  console.log('\t' + error);
}

it('makes get requests to the correct address', (done) => {
  client.get('test').then((response) => {
    //esperamos a resposta do pedido e verificamos que ela veio do domínio certo
    expect(response.url).toBe(testUrl);
    done();
  }).catch((error) => {
    //se por algum motivo o teste não conseguir acessar a rede, exibimos uma
    //mensagem de erro e encerramos o teste.
    networkErrorMessage('restClient GET request', error);
    done();
  });
});

//os testes subsequentes seguem a mesma lógica do primeiro.
it('makes put requests to the correct address', (done) => {
  client.put('test', 'test-body').then((response) => {
    expect(response.url).toBe(testUrl);
    done();
  }).catch((error) => {
    networkErrorMessage('"restClient PUT request"', error);
    done();
  });
});

it('makes patch requests to the correct address', (done) => {
  client.patch('test', { test: "test" }).then((response) => {
    expect(response.url).toBe(testUrl);
    done();
  }).catch((error) => {
    networkErrorMessage('"restClient PATCH request"', error);
    done();
  });
});

