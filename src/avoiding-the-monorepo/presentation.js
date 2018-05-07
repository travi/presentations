import React from 'react';
import {Deck, Heading, Slide, Text} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default/index';

const theme = createTheme({
  primary: '#C12127'
});

export default function Presentation() {
  return (
    <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
      <Slide transition={['zoom']} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1}>
          Avoiding the Monorepo
        </Heading>
        <Text textSize="1em" margin="40px 0px 0px" bold>Matt Travi</Text>
      </Slide>
    </Deck>
  );
}
