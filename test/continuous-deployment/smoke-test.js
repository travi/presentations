import React from 'react';
import {mount} from 'enzyme';
import ContinuousDeployment from '../../src/continuous-deployment/presentation';
import ContinuousDeploymentDsmJs from '../../src/continuous-deployment-dsmjs-june-2017/presentation';

suite('smoke tests for the continuous-deployment presentation', () => {
  test('that the presentation renders', () => {
    const wrapper = mount(<ContinuousDeployment />);

    wrapper.unmount();
  });

  test('that the presentation given at dsmjs renders', () => {
    const wrapper = mount(<ContinuousDeploymentDsmJs />);

    wrapper.unmount();
  });
});
