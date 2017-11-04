import React from 'react';
import {mount} from 'enzyme';
import ReactInIsolation from '../../src/react-in-isolation/presentation';
import ReactInIsolationDsmJs from '../../src/react-in-isolation-dsmjs-oct-2017/presentation';
import ReactInIsolationIcc from '../../src/react-in-isolation-icc-nov-2017/presentation';

suite('smoke tests for the react-in-isolation presentation', () => {
  test('that the presentation renders', () => {
    const wrapper = mount(<ReactInIsolation />);

    wrapper.unmount();
  });

  test('that the presentation given at dsmjs renders', () => {
    const wrapper = mount(<ReactInIsolationDsmJs />);

    wrapper.unmount();
  });

  test('that the presentation given at iowa code camp renders', () => {
    const wrapper = mount(<ReactInIsolationIcc />);

    wrapper.unmount();
  });
});
