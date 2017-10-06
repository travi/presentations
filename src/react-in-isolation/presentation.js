import React from 'react';
import createTheme from 'spectacle/lib/themes/default';
import {Deck, Heading, Slide, Text} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

const theme = createTheme({
  primary: '#333',
  secondary: '#e5e5e5',
  tertiary: '#e5e5e5'
});

const images = {};

preloader(images);

export default function Presentation() {
  return (
    <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
      <Slide transition={['zoom']}>
        <Heading size={1} fit caps lineHeight={1}>React in Isolation</Heading>

        <Text textColor="#888" textSize="1em" margin="40px 0px 0px" bold>Matt Travi</Text>
      </Slide>

      <Slide />
    </Deck>
  );
}

Presentation.displayName = 'Presentation';
