import React from 'react';
import createTheme from 'spectacle/lib/themes/default';
import {Deck, Heading, Link, Slide, Text} from 'spectacle';

import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

const theme = createTheme({
  primary: '#c80000'
});

export default function Presentation() {
  return (
    <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
      <Slide transition={['zoom']} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="black">
          Collaborating through a _shared_ component library
        </Heading>
        <Link href="https://github.com/FormidableLabs/spectacle">
          <Text bold caps textColor="tertiary">View on Github</Text>
        </Link>
        <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
      </Slide>
    </Deck>
  );
}

Presentation.displayName = 'Presentation';
