import React from 'react';
import createTheme from 'spectacle/lib/themes/default';
import {Appear, Code, Deck, Heading, List, ListItem, S, Slide, Text} from 'spectacle';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

const theme = createTheme({
  primary: '#333',
  secondary: '#e5e5e5',
  tertiary: '#e5e5e5'
});

export default function Presentation() {
  return (
    <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
      <Slide transition={['zoom']}>
        <Heading size={1} fit caps lineHeight={1}>Collaborating through a</Heading>
        <Heading size={2} fit caps lineHeight={1}><S type="italic">shared</S> component library</Heading>
        <Text textColor="#888" textSize="1em" margin="40px 0px 0px" bold>Matt Travi</Text>
      </Slide>
      <Slide>
        <Heading size={1} fit>Extremely Difficult to</Heading>
        <Heading size={2} fit>Keep Teams Aligned</Heading>
      </Slide>
      <Slide>
        <Heading size={1} fit>Spectrum of Tools &amp; Processes</Heading>
      </Slide>
      <Slide>
        <Heading size={1} fit>Styleguide/Design Spec</Heading>
        <List>
          <Appear><ListItem>Defines visual/interaction design details and usage guidelines</ListItem></Appear>
          <Appear><ListItem>Does not require actual implementation</ListItem></Appear>
          <Appear><ListItem>Could be distributed as <Code textColor="#888">.pdf</Code></ListItem></Appear>
        </List>
      </Slide>
      <Slide>
        <Heading size={1} fit>Component Library</Heading>
        <List>
          <Appear><ListItem>Actual implementation</ListItem></Appear>
          <Appear><ListItem>Live interactions</ListItem></Appear>
        </List>
      </Slide>
      <Slide>
        <Heading size={1} fit>What is your experience?</Heading>
        <List>
          <Appear><ListItem>Familiar with these tools?</ListItem></Appear>
          <Appear><ListItem>Have a design spec or style guide?</ListItem></Appear>
          <Appear><ListItem>Have an interactive component library?</ListItem></Appear>
          <Appear><ListItem>Have a functional prototype?</ListItem></Appear>
          <Appear><ListItem>Share code in component library/prototype & production?</ListItem></Appear>
        </List>
      </Slide>
      <Slide>
        <Heading size={1} fit style={{padding: '0 0 20px 0'}}>Encouraging Collaboration</Heading>
        <Heading size={3} textColor="#888">Agile Manifesto</Heading>
        <List>
          <ListItem>Individuals and interactions over processes and tools</ListItem>
          <ListItem textColor="#888">Working software over comprehensive documentation</ListItem>
          <ListItem>Customer collaboration over contract negotiation</ListItem>
          <ListItem>Responding to change over following a plan</ListItem>
        </List>
      </Slide>
      <Slide bgColor="#e5e5e5" textColor="#333">
        <Heading size={1} textColor="#333">Outline</Heading>
        <List>
          <Appear><ListItem>Why our best attempts often fail</ListItem></Appear>
          <Appear><ListItem>Early problems in our new app at Dwolla</ListItem></Appear>
          <Appear><ListItem>Rallying around components</ListItem></Appear>
          <Appear><ListItem>
            Shared codebase
            <List style={{marginLeft: 50}}>
              <Appear><ListItem>How to publish and distribute</ListItem></Appear>
            </List>
          </ListItem></Appear>
        </List>
      </Slide>
      <Slide>
        <Heading size={1} fit>When a Component Library</Heading>
        <Heading size={2} fit caps>Falls Apart</Heading>
      </Slide>
    </Deck>
  );
}

Presentation.displayName = 'Presentation';
