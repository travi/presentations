import React from 'react';
import {mount} from 'enzyme';
import Presentation from '../../src/component-library/presentation';

suite('smoke tests for the component-library presentation', () => {
  test('that the presentation renders', () => {
    const wrapper = mount(<Presentation />);

    wrapper.unmount();
  });
});
