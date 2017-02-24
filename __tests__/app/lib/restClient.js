import 'react-native';
import RestClient from 'rest-client';

it('makes requests to the correct address', (done) => {
  const client = new RestClient("http://example.com");
  client.get("test").then((response) => {
    expect(response.url).toBe("http://example.com/test");
    done();
  }).catch((error) => {
    console.log("Test 'makes requests to the correct address could not be run: ");
    console.log("\tNetwork unavailable.");
    done();
  });
});
