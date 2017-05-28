import React from 'react';
import createTheme from 'spectacle/lib/themes/default';
import {Deck, Slide, Heading, Text, Image, Code, List, ListItem, Appear} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import Emojify from 'react-emojione';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

const theme = createTheme({
  primary: '#C12127'
});

const images = {
  greenkeeper: require('../../assets/greenkeeper.png')
};

preloader(images);

const notesForInternalPackagesSlide = "If managing thirdparty dependencies in your app isn't enough, lets take a look" +
  ' at how we can handle internal packages.';

export default function Presentation() {
  return (
    <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
      <Slide transition={['zoom']} bgColor="primary">
        <Heading size={2} fit caps lineHeight={1} textColor="black">
          Continuous Deployment
        </Heading>
        <Heading size={1} fit>
          of npm packages
        </Heading>
        <Text textSize="1em" margin="20px 0px 0px" bold>Matt Travi</Text>
      </Slide>
      <Slide bgColor="black" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Continuous Integration
        </Heading>
      </Slide>
      <Slide bgColor="black" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Continuous Delivery
        </Heading>
      </Slide>
      <Slide bgColor="black" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Continuous Deployment
        </Heading>
        <Heading size={1} fit>
          <Code textColor="white">master</Code> means production
        </Heading>
      </Slide>
      <Slide bgColor="black" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Your test suite
        </Heading>
        <Text textSize="1em" margin="20px 0px 0px" bold>Confidently deploy without human intervention</Text>
      </Slide>
      <Slide bgColor="black" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Travis CI
        </Heading>
        <List textColor="white">
          <Appear><ListItem>Tight integration with GitHub</ListItem></Appear>
          <Appear><ListItem>Strongly encourages continuous deployment</ListItem></Appear>
          <Appear><ListItem>Any CI server could be configured this way, but Travis is by default</ListItem></Appear>
        </List>
      </Slide>
      <Slide bgColor="white" transition={['slide']}>
        <Image src={images.greenkeeper.replace('/', '')} margin="0px auto 40px" />
      </Slide>
      <Slide bgColor="white" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Greenkeeper <Emojify>:palm_tree:</Emojify>
        </Heading>
        <List>
          <Appear><ListItem>React publishes a new version to npm</ListItem></Appear>
          <Appear><ListItem>Greenkeeper sends a PR to your application&apos;s repo</ListItem></Appear>
        </List>
      </Slide>
      <Slide bgColor="white" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Is a GitHub (only) integration
        </Heading>
      </Slide>
      <Slide bgColor="white" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          So many PRs!!!
        </Heading>
      </Slide>
      <Slide bgColor="black" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Greenkeeper-keeper
        </Heading>
        <List textColor="white">
          <Appear><ListItem>PR verified to be from Greenkeeper</ListItem></Appear>
          <Appear><ListItem>Commit statuses all pass</ListItem></Appear>
          <Appear><ListItem>PR merged</ListItem></Appear>
          <Appear><ListItem>Branch automatically deleted</ListItem></Appear>
          <Appear>
            <ListItem>Commit to <Code textColor="white">master</Code> triggers production deploy</ListItem>
          </Appear>
        </List>
      </Slide>
      <Slide
        bgColor="green"
        transition={['slide']}
        notes={notesForInternalPackagesSlide}
      >
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Internal packages
        </Heading>
      </Slide>
      <Slide bgColor="black" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Semantic-Release
        </Heading>
        <List textColor="white">
          <Appear><ListItem>Determines the previously released version from the registry</ListItem></Appear>
          <Appear><ListItem>Bumps the version (semver compatible) based on commit messages</ListItem></Appear>
          <Appear><ListItem>Publishes to the registry</ListItem></Appear>
          <Appear><ListItem>Pushes the tag and release notes to GitHub</ListItem></Appear>
        </List>
      </Slide>
      <Slide bgColor="black" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Dependencies of Dependencies
        </Heading>
        <Heading size={1} caps fit>
          Greenkeeper uses semantic-release compatible commit messages
        </Heading>
        <List textColor="white">
          <Appear>
            <ListItem>
              <Code textColor="white">devDependencies</Code> are committed as <Code textColor="white">chore</Code>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <Code textColor="white">dependencies</Code> are committed as <Code textColor="white">fix</Code>
            </ListItem>
          </Appear>
        </List>
      </Slide>
    </Deck>
  );
}

Presentation.displayName = 'Presentation';
