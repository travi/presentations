import React from 'react';
import {mount} from 'enzyme';
import Example from '../../src/example/presentation';

suite('smoke tests for the example presentation', () => {
  test('that the presentation renders', () => {
    mount(<Example />);
  });
});
