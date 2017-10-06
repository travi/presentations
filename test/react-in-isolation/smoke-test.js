import React from 'react';
import {mount} from 'enzyme';
import ReactInIsolation from '../../src/react-in-isolation/presentation';

suite('smoke tests for the react-in-isolation presentation', () => {
  test('that the presentation renders', () => {
    const wrapper = mount(<ReactInIsolation />);

    wrapper.unmount();
  });
});
