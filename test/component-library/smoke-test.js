import React from 'react';
import {mount} from 'enzyme';
import Presentation from '../../src/component-library/presentation';
import PresentationDsmJs from '../../src/component-library-dsmjs-july-2016/presentation';

suite('smoke tests for the component-library presentation', () => {
  test('that the presentation renders', () => {
    const wrapper = mount(<Presentation />);

    wrapper.unmount();
  });

  test('that the presentation given at dsmjs renders', () => {
    const wrapper = mount(<PresentationDsmJs />);

    wrapper.unmount();
  });
});
