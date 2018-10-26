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
            <a href="react-in-isolation/">
Latest
            </a>
          </li>
          <li>
            <a href="react-in-isolation-dsmjs-oct-2017/">
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
            <a href="react-in-isolation-icc-nov-2017/">
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
        </ol>
      </li>
      <li>
        Avoiding the Monorepo
        <ol>
          <li>
            <a href="avoiding-the-monorepo/">
Latest
            </a>
          </li>
          <li>
            <a href="avoiding-the-monorepo-dsmjs-may-2018/">
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
    </ul>
  );
}

Presentations.displayName = 'Presenations';

render(<Presentations />, document.getElementById('root'));
