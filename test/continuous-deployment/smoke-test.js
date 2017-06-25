import React from 'react';
import {mount} from 'enzyme';
import Example from '../../src/continuous-deployment/presentation';

suite('smoke tests for the continuous-deployment presentation', () => {
  test('that the presentation renders', () => {
    const wrapper = mount(<Example />);

    wrapper.unmount();
  });
});
