import React from 'react';
import createTheme from 'spectacle/lib/themes/default';
import {Appear, Deck, Heading, Image, Link, List, ListItem, Slide, Text} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import Terminal from 'spectacle-terminal';
import CodeSlide from 'spectacle-code-slide';
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

      <Slide transition={['zoom']}>
        <Heading size={1} fit>Not an intro to React</Heading>
        <Heading size={2} fit>Instead, how to learn React</Heading>
      </Slide>

      <Slide>
        <Heading size={1} fit>React, by itself, can be simple</Heading>
      </Slide>

      <Slide>
        <Heading size={1} fit>
          That simplicity is clouded in an application
        </Heading>
      </Slide>

      <Slide>
        <Heading size={2} fit>Build Tools</Heading>

        <List>
          <ListItem>Transpilation (Babel)</ListItem>
          <ListItem>Bundling for the browser (Webpack)</ListItem>
        </List>
      </Slide>

      <Slide>
        <Heading size={2} fit>Application Wiring</Heading>

        <List>
          <ListItem>Loading data into the browser (Redial, etc)</ListItem>
          <ListItem>State management (Redux, MobX, etc)</ListItem>
          <ListItem>Routing (React Router)</ListItem>
          <ListItem>Server-side Render?</ListItem>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit>How can we isolate React</Heading>
        <Heading size={2} fit>to learn it without the distractions?</Heading>
      </Slide>

      <Slide transition={['zoom']}>
        <Heading size={1}>Hello World</Heading>
      </Slide>

      <CodeSlide
        lang="js"
        code={require('../../assets/react-in-isolation/create-element-hello-world.example')}
        ranges={[{
          loc: [2, 9],
          note: 'pure JavaScript component',
          title: 'createElement'
        }]}
      />

      <CodeSlide
        lang="js"
        code={require('../../assets/react-in-isolation/jsx-hello-world.example')}
        ranges={[{
          loc: [2, 5],
          title: 'JSX'
        }]}
      />

      <CodeSlide
        lang="js"
        code={require('../../assets/react-in-isolation/string-hello-world.example')}
        ranges={[{
          loc: [0, 3],
          note: 'Strings can now be rendered directly',
          title: 'React 16'
        }]}
      />

      <Slide>
        <Link href="https://storybook.js.org/">
          <Image width={'80%'} src={require('../../assets/react-in-isolation/storybook.svg')} />
        </Link>
      </Slide>

      <Slide bgColor="#888">
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

      <CodeSlide
        lang="js"
        code={require('../../assets/react-in-isolation/hello-world-stories.example')}
        ranges={[
          {
            loc: [2, 5],
            note: 'import the components',
            title: 'Stories'
          },
          {
            loc: [6, 7],
            note: 'Define the category',
            title: 'Stories'
          },
          {
            loc: [7, 10],
            note: 'Render the stories',
            title: 'Stories'
          }
        ]}
      />

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
