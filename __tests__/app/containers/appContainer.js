import 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';
import AppContainer from 'app-container';

import renderer from 'react-test-renderer';

function makeTestStore(initial) {
  return createStore(reducers, initial);
}

it('renders correctly', () => {
  const tree = renderer.create(
      <Provider store={makeTestStore({})}>
        <AppContainer />
      </Provider>
  );
});
