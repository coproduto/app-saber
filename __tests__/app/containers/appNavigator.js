import 'react-native';
import React from 'react';
import AppNavigator from 'app-navigator';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <AppNavigator />
  );
});
