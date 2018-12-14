import React from 'react';
import {render} from 'react-dom';

function Presentations() {
  return (
    <ul>
      <li>
        Component Library
        <ol>
          <li>
            <a href="component-library/">
              Latest
            </a>
          </li>
          <li>
            <a href="component-library-dsmjs-july-2016/">
              Collaborating through a
              {' '}
              <em>
                shared
              </em>
              {' '}
              component library
            </a>
            {' '}
            Given at
            {' '}
            <a href="https://dsmjs.com">
              dsmJS
            </a>
            {' '}
            in
            {' '}
            <a href="https://dsmjs.com/2016/07/12/meeting.html">
              <time dateTime="2016-07-12">
                July, 2016
              </time>
            </a>
          </li>
        </ol>
      </li>
      <li>
        Continuous Deployment
        <ol>
          <li>
            <a href="continuous-deployment/">
              Latest
            </a>
          </li>
          <li>
            <a href="continuous-deployment-dsmjs-june-2017/">
              Continuous Deployment of
              {' '}
              <code>
                npm
              </code>
              {' '}
              packages
            </a>
            {' '}
            Given at
            {' '}
            <a href="https://dsmjs.com">
              dsmJS
            </a>
            {' '}
            in
            {' '}
            <a href="https://dsmjs.com/2017/06/13/meeting.html">
              <time dateTime="2017-06-13">
                June, 2017
              </time>
            </a>
          </li>
        </ol>
      </li>
      <li>
        Learn React in Isolation
        <ol>
          <li>
            <a href="https://react-in-isolation.travi.org/">
              Latest
            </a>
          </li>
          <li>
            <a href="https://dsmjs-oct-2017--react-in-isolation.netlify.com/">
              Learn React in Isolation
            </a>
            {' '}
            Given at
            {' '}
            <a href="https://dsmjs.com">
              dsmJS
            </a>
            {' '}
            in
            {' '}
            <a href="https://dsmjs.com/2017/10/10/meeting.html">
              <time dateTime="2017-10-10">
                October, 2017
              </time>
            </a>
          </li>
          <li>
            <a href="https://icc-nov-2017--react-in-isolation.netlify.com/">
              Learn React in Isolation
            </a>
            {' '}
            Given at
            {' '}
            <a href="http://iowacodecamp.com/">
              Iowa Code Camp
            </a>
            {' '}
            in
            {' '}
            <time dateTime="2017-11-04">
              November, 2017
            </time>
          </li>
          <li>
            <a href="https://webgeeks-dec-2018--react-in-isolation.netlify.com/">
              Learn React in Isolation
            </a>
            {' '}
            Given at
            {' '}
            <a href="https://www.dsmwebgeeks.com/">
              DSM Web Geeks
            </a>
            {' '}
            in
            {' '}
            <a href="https://www.dsmwebgeeks.com/wg_events/learning-react-in-isolation/">
              <time dateTime="2018-12-12">
                December, 2018
              </time>
            </a>
          </li>
        </ol>
      </li>
      <li>
        Avoiding the Monorepo
        <ol>
          <li>
            <a href="https://avoiding-the-monorepo.travi.org/">
              Latest
            </a>
          </li>
          <li>
            <a href="https://dsmjs-may-2018--avoiding-the-monorepo.netlify.com/">
              Avoiding the Monorepo
            </a>
            {' '}
            Given at
            {' '}
            <a href="https://dsmjs.com">
              dsmJS
            </a>
            {' '}
            in
            {' '}
            <a href="https://dsmjs.com/2018/05/08/meeting.html">
              <time dateTime="2018-05-08">
                May, 2018
              </time>
            </a>
          </li>
        </ol>
      </li>
      <li>
        CI and CD Compatibility
        <ol>
          <li>
            <a href="https://ci-vs-cd.travi.org/">
              Latest
            </a>
          </li>
          <li>
            <a href="https://icc-dec-2018--ci-vs-cd.netlify.com/">
              CI vs CD: The Unexpected Conflict
            </a>
            {' '}
            Given at
            {' '}
            <a href="http://iowacodecamp.com/">
              Iowa Code Camp
            </a>
            {' '}
            in
            {' '}
            <time dateTime="2018-12-08">
              December, 2018
            </time>
          </li>
        </ol>
      </li>
    </ul>
  );
}

Presentations.displayName = 'Presenations';

render(<Presentations />, document.getElementById('root'));
