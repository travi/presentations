import React from 'react';
import createTheme from 'spectacle/lib/themes/default';
import {Appear, Deck, Heading, Image, Link, List, ListItem, Slide, Text} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import Terminal from 'spectacle-terminal';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';
import Typist from 'react-typist';

const theme = createTheme({
  primary: '#333',
  secondary: '#fff',
  tertiary: '#61dafb'
});

const images = {
  enzyme: require('../../assets/react-in-isolation/enzyme.png')
};
preloader(images);

const cursor = {show: false, blink: true, element: '|', hideWhenDone: false, hideWhenDoneDelay: 1000};

export default function Presentation() {
  return (
    <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
      <Slide
        transition={['zoom']}
        bgDarken={0.75}
        bgImage={require('../../assets/react-in-isolation/react-logo.svg')}
      >
        <Heading size={1} fit caps>Learn React</Heading>
        <Heading size={2} fit caps>in Isolation</Heading>

        <Text textColor="#888" textSize="1em" margin="40px 0px 0px" bold>Matt Travi</Text>
      </Slide>

      <Slide>
        <Heading size={1} fit>React, by itself, can be simple</Heading>
      </Slide>

      <Slide>
        <Heading size={1} fit>
          Unfortunately, that simplicity is clouded in an application by:
        </Heading>

        <Appear>
          <div>
            <Heading size={2}>Build Tools</Heading>

            <List>
              <ListItem>Transpilation (Babel)</ListItem>
              <ListItem>Bundling for the browser (Webpack)</ListItem>
            </List>
          </div>
        </Appear>

        <Appear>
          <div>
            <Heading size={2}>Application Wiring</Heading>

            <List>
              <ListItem>Loading data into the browser (Redial, etc)</ListItem>
              <ListItem>State management (Redux, MobX, etc)</ListItem>
              <ListItem>Routing (React Router)</ListItem>
              <ListItem>Server-side Render?</ListItem>
            </List>
          </div>
        </Appear>
      </Slide>

      <Slide transition={['zoom']}>
        <Heading size={1} fit>Not an intro to React</Heading>
        <Heading size={2} fit>Instead, how to learn React</Heading>
      </Slide>

      <Slide>
        <Heading size={1} fit>How can we isolate React</Heading>
        <Heading size={2} fit>to learn it without the distractions?</Heading>
      </Slide>

      <Slide>
        <Heading size={1} fit>createElement</Heading>
      </Slide>

      <Slide>
        <Heading size={1} fit>JSX</Heading>
      </Slide>

      <Slide>
        <Heading size={1} fit>React 16</Heading>
        Can return more types

        String
        Array
      </Slide>

      <Slide>
        <Link href="https://storybook.js.org/">
          <Image width={'80%'} src={require('../../assets/react-in-isolation/storybook.svg')} />
        </Link>
      </Slide>

      <Slide>
        <Heading size={1} fit>Configuring Storybook</Heading>

        <Terminal
          title="~/development/react-in-isolation @ Travi-MBP"
          output={[
            <Typist cursor={cursor} key="storybook cli">npm i -g @storybook/cli</Typist>,
            <div key="cli installation">
              <div style={{color: 'rgb(48, 53, 57)'}}>.</div>
              <div>+ @storybook/cli@3.2.12</div>
              <div>added 379 packages in 93.821s</div>
              <div style={{color: 'rgb(48, 53, 57)'}}>.</div>
            </div>,
            <Typist cursor={cursor} key="storybook init">getstorybook</Typist>,
            <div key="init results">
              <div style={{color: 'rgb(48, 53, 57)'}}>.</div>
              <div style={{backgroundColor: 'white', color: 'black'}}>
                &nbsp;getstorybook - the simplest way to add a storybook to your project.
              </div>
              <div style={{color: 'rgb(48, 53, 57)'}}>.</div>
              <div>&nbsp;• Detecting project type. <span style={{color: '#00ff00'}}>✓</span></div>
              <div>
                &nbsp;• Adding storybook support to your &quot;React&quot; app.
                &nbsp;<span style={{color: '#00ff00'}}>✓</span>
              </div>
              <div>&nbsp;• Preparing to install dependencies. <span style={{color: '#00ff00'}}>✓</span></div>
            </div>
          ]}
        />
      </Slide>

      <Slide>
        <Heading size={1} fit>Props</Heading>
      </Slide>

      <Slide>
        <Heading size={1} fit>One-way Data Flow</Heading>

        <List>
          <Appear><ListItem>Major contributor to React&apos;s simplicity</ListItem></Appear>
          <Appear><ListItem>State Driven UI</ListItem></Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit>Functional Component</Heading>
      </Slide>

      <Slide>
        <Heading size={1} fit>Container Component</Heading>

        <List>
          <Appear><ListItem>State</ListItem></Appear>
          <Appear><ListItem>Lifecycle Hooks</ListItem></Appear>
          <Appear><ListItem>Instance Methods</ListItem></Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit>State</Heading>

        <List>
          <Appear><ListItem>Application</ListItem></Appear>
          <Appear><ListItem>Component</ListItem></Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit>Controlled Input</Heading>
      </Slide>
    </Deck>
  );
}

Presentation.displayName = 'Presentation';
