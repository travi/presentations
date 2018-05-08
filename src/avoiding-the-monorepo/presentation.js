import React from 'react';
import {Deck, Heading, Image, Slide, Text, Typeface} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default/index';
import preloader from 'spectacle/lib/utils/preloader';

const theme = createTheme({
  primary: '#C12127'
});

const images = {
  pr: require('../../assets/pr.png'),
  semanticReleaseLogo: require('../../assets/semantic-release.png'),
  greenkeeperKeeperLogo: require('../../assets/greenkeeper-keeper.jpg'),
  yeoman: require('../../assets/yeoman-illustration.png')
};

preloader(images);

export default function Presentation() {
  return (
    <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
      <Slide transition={['zoom']} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1}>
          Avoiding the Monorepo
        </Heading>
        <Text textSize="1em" margin="40px 0px 0px" bold>Matt Travi</Text>
      </Slide>
      <Slide bgColor="black" transition={['slide']}>
        <Heading size={1} fit>Continuous Deployment</Heading>
      </Slide>
      <Slide bgColor="white">
        <Heading size={3} textColor="black" textFont="primary" caps fit>Semantic Release</Heading>
        <Image src={images.semanticReleaseLogo.replace('/', '')} width="50%" />
      </Slide>
      <Slide bgColor="white">
        <Heading size={3} textColor="#00c775" textFont="primary" caps fit>Greenkeeper</Heading>
        <Image
          src={require('../../assets/greenkeeper.svg')}
          width="50%"
          style={{boxShadow: '0 0 5px 1px rgba(0,0,0,0.3)', borderRadius: '100%'}}
        />
      </Slide>
      {/* <Slide bgColor="white"> */}
      {/* <Heading size={3} textColor="black" textFont="primary" caps fit>Greenkeeper sends a PR</Heading> */}
      {/* <Image src={images.pr.replace('/', '')} /> */}
      {/* </Slide> */}
      <Slide bgColor="white">
        <Heading size={3} textColor="black" textFont="primary" caps fit>Greenkeeper Keeper</Heading>
        <Image src={images.greenkeeperKeeperLogo.replace('/', '')} width="50%" />
      </Slide>
      <Slide bgColor="black" transition={['slide']}>
        <Heading size={1} fit>Project Scaffolding</Heading>
      </Slide>
      <Slide bgColor="white">
        <Typeface googleFont="Roboto Slab">
          <Heading size={3} textColor="black" textFont="primary" caps fit>Yeoman</Heading>
        </Typeface>
        <Image src={images.yeoman.replace('/', '')} width="50%" />
      </Slide>
    </Deck>
  );
}
