import 'react-native';
import React from 'react';
import Index from '../index.android.js';
import ImportList from '../app/components/ImportList'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('StartPage renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );
});
