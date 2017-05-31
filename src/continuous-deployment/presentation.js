import React from 'react';
import createTheme from 'spectacle/lib/themes/default';
import {Deck, Slide, Heading, Text, Image, Code, List, ListItem, Appear} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
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
      <CodeSlide
        lang="yaml"
        code={require('../../assets/travis.example')}
        ranges={[
          {
            loc: [1, 2],
            title: 'Verification',
            note: 'This is the default for node project, so inclusion is optional if npm test runs your verification'
          },
          {loc: [3, 7], title: 'Heroku'},
          {loc: [7, 12], title: 'App Engine'}
        ]}
      />
      <CodeSlide
        lang="json"
        code={require('../../assets/package.example')}
        ranges={[
          {loc: [6, 7], note: 'the verification task'},
          {loc: [2, 4], note: 'multiple lint tasks, like JavaScript and Markdown', title: 'Lint'},
          {loc: [4, 6], note: 'multiple test tasks, like unit and integration', title: 'Tests'}
        ]}
      />
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
      <CodeSlide
        lang="json"
        code={require('../../assets/package.example')}
        ranges={[
          {loc: [7, 8], note: 'Ensure the commit message is compatible with semantic-release'},
          {loc: [8, 9], note: 'Ensure the build passes before each commit'}
        ]}
      />
      <CodeSlide
        lang="yaml"
        code={require('../../assets/travis.example')}
        ranges={[
          {
            loc: [2, 3],
            title: 'Publish',
            note: 'The semantic-release task bumps the version, publishes, and compiles release notes'
          }
        ]}
      />
      <CodeSlide
        lang="json"
        code={require('../../assets/package.example')}
        ranges={[
          {
            loc: [12, 13],
            note: 'The semantic-release task bumps the version, publishes, and compiles release notes',
            title: 'Publish'
          },
          {
            loc: [10, 11],
            title: 'Pre',
            note: 'The pre task bumps the version based on the last release and the commmit messages since'
          },
          {
            loc: [11, 12],
            title: 'Post',
            note: 'The post task pushes the tag and release notes to GitHub'
          }
        ]}
      />
    </Deck>
  );
}

Presentation.displayName = 'Presentation';
