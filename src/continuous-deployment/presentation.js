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
      <Slide
        bgColor="green"
        transition={['slide']}
      >
        <Heading size={1} fit>
          JS Fatigue
        </Heading>
      </Slide>
      <Slide
        bgColor="green"
        transition={['slide']}
      >
        <Heading size={1} fit>
          Positive side to the explosion of packages
        </Heading>
      </Slide>
      <Slide
        bgColor="green"
        transition={['slide']}
      >
        <Heading size={1} fit>
          Payoff from automated test suite
        </Heading>
      </Slide>
      <Slide
        bgColor="green"
        transition={['slide']}
      >
        <Heading size={1} fit>
          First, some terminology...
        </Heading>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Continuous Integration vs. Continuous Delivery vs. Continuous Deployment
        </Heading>
      </Slide>
      <Slide bgColor="black" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Continuous Integration
        </Heading>
        <Heading size={1} fit>
          favoring code in <Code textColor="white">master</Code> over long-lived branches
        </Heading>
      </Slide>
      <Slide bgColor="black" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Continuous Delivery
        </Heading>
        <Heading size={1} fit>
          <Code textColor="white">master</Code> is always deployable
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
        <Heading size={1} fit>
          Enough confidence to deploy without human intervention
        </Heading>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Trust your test suite
        </Heading>
        <Text textSize="1em" margin="20px 0px 0px" bold>Confidently deploy without human intervention</Text>
      </Slide>
      <CodeSlide
        textSize=".8em"
        lang="json"
        code={require('../../assets/package.app.example')}
        ranges={[
          {loc: [6, 7], note: 'the verification task'},
          {loc: [2, 4], note: 'multiple lint tasks, like JavaScript and Markdown', title: 'Lint'},
          {loc: [4, 6], note: 'multiple test tasks, like unit and integration', title: 'Tests'},
          {loc: [7, 10], note: 'multiple build tasks, like server and client', title: 'Build'}
        ]}
      />
      <CodeSlide
        textSize=".8em"
        lang="json"
        notes="want to show a couple of tools that are helpful"
        code={require('../../assets/package.app.example')}
        ranges={[
          {loc: [20, 21], note: 'improves ability to chain npm scripts', title: 'npm-run-all'},
          {loc: [6, 7], note: 'run-s runs the tasks synchronously', title: 'npm-run-all'},
          {loc: [14, 15], note: 'run-p runs tasks in parallel', title: 'npm-run-all'},
          {loc: [19, 20], note: 'connects npm scripts to git hooks', title: 'husky'},
          {loc: [16, 17], note: 'automatically run npm test before each commit', title: 'husky'}
        ]}
      />
      <Slide bgColor="black" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Travis CI
        </Heading>
        <List textColor="white">
          <Appear><ListItem>Tight integration with GitHub</ListItem></Appear>
          <Appear><ListItem>Strongly encourages continuous deployment</ListItem></Appear>
          <Appear><ListItem>Config is versioned with the project</ListItem></Appear>
          <Appear><ListItem>CD by default on Travis, but any CI server could be configured this way</ListItem></Appear>
        </List>
      </Slide>
      <CodeSlide
        lang="yaml"
        code={require('../../assets/travis.app.example')}
        ranges={[
          {
            loc: [1, 2],
            title: 'Verification',
            note: 'This is the default for node projects, so inclusion is optional'
          },
          {loc: [2, 6], title: 'Heroku'},
          {loc: [6, 11], title: 'App Engine'}
        ]}
      />
      <Slide
        bgColor="green"
        transition={['slide']}
      >
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Dependencies
        </Heading>
      </Slide>
      <Slide bgColor="white" transition={['slide']}>
        <Image src={images.greenkeeper.replace('/', '')} margin="0px auto 40px" />
      </Slide>
      <Slide bgColor="white" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Greenkeeper <Emojify>:palm_tree:</Emojify>
        </Heading>
        <List>
          <Appear><ListItem>React (for example) publishes a new version to npm</ListItem></Appear>
          <Appear><ListItem>Greenkeeper sends a PR to your application&apos;s repo</ListItem></Appear>
          <Appear><ListItem>If all goes well, you only have to click merge</ListItem></Appear>
        </List>
      </Slide>
      <Slide
        bgColor="green"
        transition={['slide']}
      >
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Caveats
        </Heading>
        <List>
          <Appear><ListItem>Is a GitHub (only) integration</ListItem></Appear>
          <Appear><ListItem>No developer to look at the execution before pushing</ListItem></Appear>
          <Appear><ListItem>Unit tests alone might not provide enough confidence</ListItem></Appear>
        </List>
      </Slide>
      <Slide bgColor="white" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Is a GitHub (only) integration
        </Heading>
      </Slide>
      <Slide bgColor="white" transition={['slide']}>
        <Heading size={2} fit textColor="primary" textFont="primary">
          So many PRs!!!
        </Heading>
        <Heading size={1} textColor="black" fit>
          Isn&apos;t this worse than before&#63;
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
      <Slide bgColor="green" transition={['slide']} notes={notesForInternalPackagesSlide}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Internal packages
        </Heading>
      </Slide>
      <Slide
        bgColor="green"
        transition={['slide']}
      >
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          What does &quot;done&quot; mean&#63;
        </Heading>
        <List textColor="white">
          <Appear><ListItem>Change is in <Code>master</Code> of the package repo&#63;</ListItem></Appear>
          <Appear><ListItem>New version of package published, updated in consuming apps&#63;</ListItem></Appear>
          <Appear>
            <ListItem>
              What if we could apply the idea of &quot;<Code>master</Code> means production&quot; to packages&#63;
            </ListItem>
          </Appear>
        </List>
      </Slide>
      <Slide bgColor="green" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          What are the road blocks for getting a change deployed to a user&#63;
        </Heading>
        <List textColor="white">
          <Appear><ListItem>Bundling changes into a release</ListItem></Appear>
          <Appear><ListItem>Limiting major/breaking releases</ListItem></Appear>
        </List>
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
      <Slide bgColor="green" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Patch, feature, breakage
        </Heading>
        <List textColor="white">
          <Appear><ListItem><Code>fix</Code></ListItem></Appear>
          <Appear><ListItem><Code>feat</Code></ListItem></Appear>
          <Appear><ListItem><Code>BREAKING CHANGE: </Code></ListItem></Appear>
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
        code={require('../../assets/package.npm.example')}
        ranges={[
          {
            loc: [27, 30],
            note: 'provides a wizard to simplify matching the expected commit pattern',
            title: 'commitizen'
          },
          {
            loc: [8, 9],
            note: 'Ensure the commit message is compatible with semantic-release',
            title: 'Commit pattern verification'
          },
          {
            loc: [9, 10],
            note: 'Ensure the commit passes all tests before committing',
            title: 'Verification'
          }
        ]}
      />
      <Slide bgColor="green" transition={['slide']}>
        <Heading size={1} caps fit>
          Commitizen Example
        </Heading>
      </Slide>
      <CodeSlide
        lang="yaml"
        code={require('../../assets/travis.npm.example')}
        ranges={[
          {
            loc: [1, 2],
            title: 'Publish',
            note: 'The semantic-release task bumps the version, publishes, and compiles release notes'
          }
        ]}
      />
      <CodeSlide
        textSize=".85em"
        lang="json"
        code={require('../../assets/package.npm.example')}
        ranges={[
          {
            loc: [13, 14],
            note: 'The semantic-release task bumps the version, publishes, and compiles release notes',
            title: 'Release'
          },
          {
            loc: [11, 12],
            title: 'Pre',
            note: 'The pre task bumps the version based on the last release and the commit messages since'
          },
          {
            loc: [20, 21],
            title: 'Version',
            note: 'Only defined to prevent a cli warning. It is overwritten by semantic-release before publishing'
          },
          {
            loc: [10, 11],
            title: 'Pre-publish',
            note: 'Any npm script can have a pre or post script. This script builds the bundled modules before publish'
          },
          {loc: [7, 8], title: 'Rollup', note: 'Build bundles for distribution'},
          {
            loc: [21, 23],
            title: 'Bundles',
            note: '`main` defines the common-js bundle. `module` defines the es module'
          },
          {loc: [12, 13], title: 'Post', note: 'The post task pushes the tag and release notes to GitHub'}
        ]}
      />
      <Slide bgColor="green" transition={['slide']}>
        <Heading size={1} fit>
          Continuous Deployment isn&apos;t an option on my team
        </Heading>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          How can I dial this back&#63;
        </Heading>
        <List textColor="white">
          <Appear><ListItem>Continuously deploy packages, but not the application</ListItem></Appear>
          <Appear><ListItem>Consider starting with semantic-release, but introduce greenkeeper later</ListItem></Appear>
        </List>
      </Slide>
      <Slide bgColor="green" transition={['slide']}>
        <Heading size={1} fit>
          Services
        </Heading>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Value has made investment in specific services worthwhile
        </Heading>
        <List textColor="white">
          <Appear><ListItem>GitHub</ListItem></Appear>
          <Appear><ListItem>Travis CI</ListItem></Appear>
          <Appear><ListItem>Private npm</ListItem></Appear>
        </List>
      </Slide>

    </Deck>
  );
}

Presentation.displayName = 'Presentation';
