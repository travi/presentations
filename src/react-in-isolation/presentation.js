import React from 'react';
import createTheme from 'spectacle/lib/themes/default';
import {Appear, Deck, Fill, Heading, Image, Layout, List, ListItem, Slide, Text} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

const theme = createTheme({
  primary: '#333',
  secondary: '#fff',
  tertiary: '#61dafb'
});

const images = {
  enzyme: require('../../assets/enzyme.png')
};
preloader(images);

export default function Presentation() {
  return (
    <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
      <Slide
        transition={['zoom']}
        bgDarken={0.75}
        bgImage={require('../../assets/react-logo.svg')}
      >
        <Heading size={1} fit caps lineHeight={1}>React in Isolation</Heading>

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
          <List>
            <ListItem>Babel</ListItem>
            <ListItem>Webpack</ListItem>
          </List>
        </Appear>

        <Appear>
          <List>
            <ListItem>Loading data into the browser</ListItem>
            <ListItem>State management</ListItem>
          </List>
        </Appear>
      </Slide>

      <Slide>
        <Heading size={1} fit>Not an intro to React</Heading>
        <Heading size={2} fit>Instead, how to learn React</Heading>
      </Slide>

      <Slide>
        <Heading size={1} fit>How can we isolate React</Heading>
        <Heading size={2} fit>to learn it without the distractions?</Heading>

        <List>
          <Appear><ListItem>Visual</ListItem></Appear>
          <Appear><ListItem>Tests</ListItem></Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>Visual</Heading>
      </Slide>

      <Slide>
        <Image width={'80%'} src={require('../../assets/storybook.svg')} />
      </Slide>

      <Slide>
        <Heading size={1} fit caps>Tests</Heading>
      </Slide>

      <Slide>
        <Layout>
          <Fill>
            <Image width={'70%'} src={require('../../assets/airbnb.svg')} />
            <Appear><Image width={'70%'} src={require('../../assets/mocha.svg')} /></Appear>
          </Fill>
          <Fill>
            <Image width={'70%'} src={images.enzyme.replace('/', '')} />
            <Appear><Image width={'60%'} src={require('../../assets/chai.svg')} /></Appear>
          </Fill>
        </Layout>
      </Slide>

      <Slide>
        <Heading size={1} fit>One-way Data Flow</Heading>

        <List>
          <Appear><ListItem>Major contributor to React&apos;s simplicity</ListItem></Appear>
          <Appear><ListItem>State Driven UI</ListItem></Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit>createElement</Heading>
      </Slide>

      <Slide>
        <Heading size={1} fit>JSX</Heading>
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
          <Appear><ListItem>Componet</ListItem></Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit>Controlled Input</Heading>

        <List>
          <Appear><ListItem>Application</ListItem></Appear>
          <Appear><ListItem>Componet</ListItem></Appear>
        </List>
      </Slide>
    </Deck>
  );
}

Presentation.displayName = 'Presentation';
