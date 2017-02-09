import React from 'react';
import createTheme from 'spectacle/lib/themes/default';
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from 'spectacle';

require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const theme = createTheme({
  primary: '#c80000'
});

const images = {
  city: require('../../assets/city.jpg'),
  kat: require('../../assets/kat.png'),
  logo: require('../../assets/formidable-logo.svg'),
  markdown: require('../../assets/markdown.png')
};

export default function Presentation() {
  return (
    <Spectacle theme={theme}>
      <Deck transition={['zoom', 'slide']} transitionDuration={500}>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            Spectacle
          </Heading>
          <Heading size={1} fit caps>
            A ReactJS Presentation Library
          </Heading>
          <Heading size={1} fit caps textColor="black">
            Where You Can Write Your Decks In JSX
          </Heading>
          <Link href="https://github.com/FormidableLabs/spectacle">
            <Text bold caps textColor="tertiary">View on Github</Text>
          </Link>
          <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
        </Slide>
        <Slide
          transition={['slide']} bgColor="black"
          notes="You can even put notes on your slide. How awesome is that?"
        >
          <Image src={images.kat.replace('/', '')} margin="0px auto 40px" height="293px" />
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Wait what?
          </Heading>
        </Slide>
        <Slide transition={['slide']} bgImage={images.city.replace('/', '')} bgDarken={0.75}>
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Full Width
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit textColor="tertiary">
              Adjustable Darkness
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit textColor="primary">
              Background Imagery
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading caps fit>Flexible Layouts</Heading>
          <Layout>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Left
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Right
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['slide']} bgColor="black">
          <BlockQuote>
            <Quote>Wonderfully formatted quotes</Quote>
            <Cite>Ken Wheeler</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['spin', 'zoom']} bgColor="tertiary">
          <Heading caps fit size={1} textColor="primary">
            Inline Markdown
          </Heading>
          <Markdown>
            {`
![Markdown Logo](${images.markdown.replace('/', '')})
You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
          </Markdown>
        </Slide>
        <Slide transition={['slide', 'spin']} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Smooth
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Combinable Transitions
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <List>
            <Appear><ListItem>Inline style based theme system</ListItem></Appear>
            <Appear><ListItem>Autofit text</ListItem></Appear>
            <Appear><ListItem>Flexbox layout system</ListItem></Appear>
            <Appear><ListItem>React-Router navigation</ListItem></Appear>
            <Appear><ListItem>PDF export</ListItem></Appear>
            <Appear><ListItem>And...</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} caps fit textColor="tertiary">
            Your presentations are interactive
          </Heading>
        </Slide>
        <Slide transition={['spin', 'slide']} bgColor="tertiary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            Made with love in Seattle by
          </Heading>
          <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo} /></Link>
        </Slide>
      </Deck>
    </Spectacle>
  );
}

Presentation.displayName = 'Presentation';
