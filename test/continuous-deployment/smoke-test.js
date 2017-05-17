import React from 'react';
import {mount} from 'enzyme';
import Example from '../../src/contiuous-desployment/presentation';

suite('smoke tests for the example presentation', () => {
  test('that the presentation renders', () => {
    const wrapper = mount(<Example />);

    wrapper.unmount();
  });
});
