import React from 'react';
import createTheme from 'spectacle/lib/themes/default';
import {Appear, Code, Deck, Heading, Image, Link, List, ListItem, Slide, Text} from 'spectacle';
import Terminal from 'spectacle-terminal';
import Typist from 'react-typist';
import CodeSlide from 'spectacle-code-slide';
import ImageSlide from 'spectacle-image-slide';
import preloader from 'spectacle/lib/utils/preloader';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

const theme = createTheme({
  primary: '#C12127'
});
const logoSize = 400;

const images = {
  greenkeeper: require('../../assets/greenkeeper.png'),
  checksPassed: require('../../assets/checks-passed.png'),
  checksFailed: require('../../assets/checks-failed.png'),
  pr: require('../../assets/pr.png'),
  lotsOfPrs: require('../../assets/lots-of-prs.png'),
  cascade: require('../../assets/cascade.png')
};

preloader(images);

const notesForFatigue = 'There has been a lot said about JS Fatigue lately... Node Community is known for lots of ' +
  'small packages. This, plus the frequency of updates contributes to fatigue';
const notesForInternalPackagesSlide = "If managing thirdparty dependencies in your app isn't enough, lets take a look" +
  ' at how we can handle internal packages.';
const notesForCommitizen = 'https://github.com/conventional-changelog-archived-repos/conventional-changelog-angular/' +
  'blob/e32d954eac0766916b9b7408efed95d643a198a9/convention.md';

const cursor = {show: false, blink: true, element: '|', hideWhenDone: false, hideWhenDoneDelay: 1000};

export default function Presentation() {
  return (
    <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
      <Slide transition={['zoom']} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="black">
          Continuous Deployment
        </Heading>
        <Heading size={1} fit>
          of npm packages
        </Heading>
        <Text textSize="1em" margin="40px 0px 0px" bold>Matt Travi</Text>
      </Slide>
      <Slide bgColor="black" transition={['slide']}>
        <Heading size={1} fit textColor="primary" caps>Payoff from Automated Testing Practices</Heading>
        <List textColor="white">
          <Appear><ListItem>Automate to give confidence</ListItem></Appear>
          <Appear><ListItem>Easy to question ROI of automated testing practices</ListItem></Appear>
          <Appear><ListItem>I hope to show a big potential payoff</ListItem></Appear>
          <Appear><ListItem>Only do this with enough automated coverage for confidence</ListItem></Appear>
          <Appear><ListItem>The payoff can be valuable to increase your coverage</ListItem></Appear>
        </List>
      </Slide>
      <Slide bgColor="black" transition={['slide']} notes={notesForFatigue}>
        <Heading size={1} fit>JS Fatigue</Heading>
      </Slide>
      <Slide bgColor="black" transition={['slide']}>
        <Heading size={1} fit>
          Positive side to the explosion of packages
        </Heading>
      </Slide>
      <Slide transition={['slide']}>
        <Heading size={1} fit>First, some terminology...</Heading>
        <List>
          <Appear><ListItem>Continuous Integration</ListItem></Appear>
          <Appear><ListItem>Continuous Delivery</ListItem></Appear>
          <Appear><ListItem>Continuous Deployment</ListItem></Appear>
        </List>
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
      <Slide transition={['zoom']}>
        <Heading size={1} fit caps lineHeight={1} textColor="black">
          Continuous Deployment
        </Heading>
        <Heading size={1} fit>
          of applications
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
      <Slide transition={['zoom']}>
        <Heading size={1} caps fit textFont="primary">Keeping Application Dependencies</Heading>
        <Heading size={2} caps fit textFont="primary">Up to Date</Heading>
      </Slide>
      <Slide
        bgColor="white"
        bgDarken={0.75}
        bgImage={images.greenkeeper.replace('/', '')}
        textColor="white"
        transition={['slide']}
      >
        <List>
          <Appear><ListItem>React (for example) publishes a new version to npm</ListItem></Appear>
          <Appear><ListItem>Greenkeeper sends a PR to your application&apos;s repo</ListItem></Appear>
          <Appear><ListItem>If all goes well, you only have to click merge</ListItem></Appear>
        </List>
      </Slide>
      <Slide bgColor="white">
        <ImageSlide title="Greenkeeper sends a PR" image={images.pr.replace('/', '')} />
      </Slide>
      <Slide bgColor="white">
        <ImageSlide title="All Commit Checks Passed" image={images.checksPassed.replace('/', '')} />
      </Slide>
      <Slide bgColor="white" transition={['slide']}>
        <Heading size={2} fit textColor="primary" textFont="primary">
          So many PRs!!!
        </Heading>
        <Heading size={1} textColor="black" fit>
          Isn&apos;t this worse than before&#63;
        </Heading>
      </Slide>
      <Slide bgColor="white">
        <ImageSlide title="A common day of PRs" image={images.lotsOfPrs.replace('/', '')} />
      </Slide>
      <Slide bgColor="black" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">Greenkeeper-keeper</Heading>
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
      <Slide bgColor="white">
        <ImageSlide
          title="greenkeeper-keeper will only merge if all checks pass"
          image={images.checksFailed.replace('/', '')}
        />
      </Slide>
      <Slide bgColor="black" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">Caveats</Heading>
        <List textColor="white">
          <Appear><ListItem>Greenkeeper is a GitHub (only) integration</ListItem></Appear>
          <Appear><ListItem>No developer to look at the execution before pushing</ListItem></Appear>
          <Appear><ListItem>Unit tests alone might not provide enough confidence</ListItem></Appear>
        </List>
      </Slide>
      <Slide transition={['zoom']}>
        <Heading size={1} fit caps lineHeight={1} textColor="black" notes={notesForInternalPackagesSlide}>
          Continuous Deployment
        </Heading>
        <Heading size={1} fit>
          of internal packages
        </Heading>
      </Slide>
      <Slide
        bgColor="black"
        transition={['slide']}
        notes="If a team isn't practicing CD, this is a complicated question"
      >
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          What does &quot;done&quot; mean&#63;
        </Heading>
        <List textColor="white">
          <Appear>
            <ListItem>
              Change is in <Code textColor="white">master</Code> of the package repo&#63;
            </ListItem>
          </Appear>
          <Appear><ListItem>New version of package published&#63;</ListItem></Appear>
          <Appear><ListItem>Updated in consuming apps&#63;</ListItem></Appear>
          <Appear><ListItem>Consuming apps deployed&#63;</ListItem></Appear>
          <Appear>
            <ListItem>
              How could we apply &quot;<Code textColor="white">master</Code> means production&quot;&#63;
            </ListItem>
          </Appear>
        </List>
      </Slide>
      <Slide bgColor="black" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Traditional Road Blocks
        </Heading>
        <List textColor="white">
          <Appear><ListItem>Bundling changes into a release</ListItem></Appear>
          <Appear><ListItem>Limiting major/breaking releases</ListItem></Appear>
          <Appear><ListItem>Updating and deploying the consuming application</ListItem></Appear>
        </List>
      </Slide>
      <Slide bgColor="black" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Semantic-Release
        </Heading>
        <List textColor="white">
          <Appear><ListItem>Determines the previously released version from the registry</ListItem></Appear>
          <Appear><ListItem>Bumps the version based on commit messages</ListItem></Appear>
          <Appear><ListItem>Publishes to the registry</ListItem></Appear>
          <Appear><ListItem>Pushes the tag and release notes to GitHub</ListItem></Appear>
        </List>
      </Slide>
      <Slide bgColor="black" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Patch, feature, breakage
        </Heading>
        <List textColor="white">
          <Appear><ListItem><Code textColor="white">fix</Code></ListItem></Appear>
          <Appear><ListItem><Code textColor="white">feat</Code></ListItem></Appear>
          <Appear><ListItem><Code textColor="white">BREAKING CHANGE: </Code></ListItem></Appear>
        </List>
      </Slide>
      <Slide transition={['slide']}>
        <Heading size={1} fit>Formatting the Commit for Semantic-Release</Heading>
        <Heading size={2} fit>Can Be Complex</Heading>
      </Slide>
      <CodeSlide
        lang="json"
        code={require('../../assets/package.npm.example')}
        ranges={[
          {
            loc: [15, 16],
            title: 'commitizen'
          },
          {
            loc: [26, 29],
            note: 'provides a wizard to simplify matching the expected commit pattern',
            title: 'commitizen'
          }
        ]}
      />
      <Slide transition={['slide']}>
        <Heading size={1} caps fit>
          Commitizen Example
        </Heading>
        <Terminal
          title="~/development/gain/front-end/react-components @ Travi-MBP"
          output={[
            <Typist cursor={cursor} key="cz command">git cz</Typist>,
            [
              <div key="inital cz step">
                <div>cz-cli@2.9.5, cz-conventional-changelog@2.0.0</div>

                <div style={{padding: '40px 0 20px 0'}}>
                  Line 1 will be cropped at 100 characters. All other lines will be wrapped after 100 characters.
                </div>
                <div>
                  <span style={{color: '#00ff00'}}>&#63;</span> Select the type of change that you&apos;re committing:
                  (Use arrow keys)
                </div>
                <div style={{color: '#00afff'}}>❯ feat: A new feature</div>
                <div>&nbsp;&nbsp;fix: A bug fix</div>
                <div>&nbsp;&nbsp;docs: Documentation only changes</div>
                <div>
                  &nbsp;&nbsp;style: Changes that do not affect the meaning of the code (white-space, formatting,
                  missing semi-colons, etc)
                </div>
                <div>&nbsp;&nbsp;refactor: A code change that neither fixes a bug nor adds a feature</div>
                <div>&nbsp;&nbsp;perf: A code change that improves performance</div>
                <div>&nbsp;&nbsp;test: Adding missing tests or correcting existing tests</div>
                <div>(Move up and down to reveal more choices)</div>
              </div>,
              <div key="second cz step">
                <div>cz-cli@2.9.5, cz-conventional-changelog@2.0.0</div>

                <div style={{padding: '40px 0 20px 0'}}>
                  Line 1 will be cropped at 100 characters. All other lines will be wrapped after 100 characters.
                </div>
                <div>
                  <span style={{color: '#00ff00'}}>&#63;</span> Select the type of change that you&apos;re committing:
                  <span style={{color: '#00afff'}}>&nbsp;feat:&nbsp;&nbsp;&nbsp;&nbsp;A new feature</span>
                </div>
                <div>
                  <span style={{color: '#00ff00'}}>&#63;</span> Denote the scope of this change ($location, $browser,
                  $compile, etc.):
                </div>
                <div><Typist cursor={cursor}>&nbsp;table-component</Typist></div>
              </div>,
              <div key="third cz step">
                <div>cz-cli@2.9.5, cz-conventional-changelog@2.0.0</div>

                <div style={{padding: '40px 0 20px 0'}}>
                  Line 1 will be cropped at 100 characters. All other lines will be wrapped after 100 characters.
                </div>
                <div>
                  <span style={{color: '#00ff00'}}>&#63;</span> Select the type of change that you&apos;re committing:
                  <span style={{color: '#00afff'}}>&nbsp;feat:&nbsp;&nbsp;&nbsp;&nbsp;A new feature</span>
                </div>
                <div>
                  <span style={{color: '#00ff00'}}>&#63;</span> Denote the scope of this change ($location, $browser,
                  $compile, etc.):
                </div>
                <div style={{color: '#00afff'}}>&nbsp;table-component</div>
                <div>
                  <span style={{color: '#00ff00'}}>&#63;</span> Write a short, imperative tense description of the
                  change:
                </div>
                <div><Typist cursor={cursor}>&nbsp;Add column sort</Typist></div>
              </div>,
              <div key="forth cz step">
                <div>cz-cli@2.9.5, cz-conventional-changelog@2.0.0</div>

                <div style={{padding: '40px 0 20px 0'}}>
                  Line 1 will be cropped at 100 characters. All other lines will be wrapped after 100 characters.
                </div>
                <div>
                  <span style={{color: '#00ff00'}}>&#63;</span> Select the type of change that you&apos;re committing:
                  <span style={{color: '#00afff'}}>&nbsp;feat:&nbsp;&nbsp;&nbsp;&nbsp;A new feature</span>
                </div>
                <div>
                  <span style={{color: '#00ff00'}}>&#63;</span> Denote the scope of this change ($location, $browser,
                  $compile, etc.):
                </div>
                <div style={{color: '#00afff'}}>&nbsp;table-component</div>
                <div>
                  <span style={{color: '#00ff00'}}>&#63;</span> Write a short, imperative tense description of the
                  change:
                </div>
                <div style={{color: '#00afff'}}>&nbsp;Add column sort</div>
                <div><span style={{color: '#00ff00'}}>&#63;</span> Provide a longer description of the change:</div>
                <div><Typist cursor={cursor}>&nbsp;Acending and decending sort orders were added</Typist></div>
              </div>,
              <div key="fifth cz step">
                <div>cz-cli@2.9.5, cz-conventional-changelog@2.0.0</div>

                <div style={{padding: '40px 0 20px 0'}}>
                  Line 1 will be cropped at 100 characters. All other lines will be wrapped after 100 characters.
                </div>
                <div>
                  <span style={{color: '#00ff00'}}>?</span> Select the type of change that you&apos;re committing:
                  <span style={{color: '#00afff'}}>&nbsp;feat:&nbsp;&nbsp;&nbsp;&nbsp;A new feature</span>
                </div>
                <div>
                  <span style={{color: '#00ff00'}}>?</span> Denote the scope of this change ($location, $browser,
                  $compile, etc.):
                </div>
                <div style={{color: '#00afff'}}>&nbsp;table-component</div>
                <div>
                  <span style={{color: '#00ff00'}}>?</span> Write a short, imperative tense description of the change:
                </div>
                <div style={{color: '#00afff'}}>&nbsp;Add column sort</div>
                <div><span style={{color: '#00ff00'}}>?</span> Provide a longer description of the change:</div>
                <div>&nbsp;Acending and decending sort orders were added</div>
                <div><span style={{color: '#00ff00'}}>?</span> List any breaking changes:</div>
                <div><Typist cursor={cursor}>&nbsp;Adds a new required prop</Typist></div>
              </div>,
              <div key="sixth cz step">
                <div>cz-cli@2.9.5, cz-conventional-changelog@2.0.0</div>

                <div style={{padding: '40px 0 20px 0'}}>
                  Line 1 will be cropped at 100 characters. All other lines will be wrapped after 100 characters.
                </div>
                <div>
                  <span style={{color: '#00ff00'}}>&#63;</span> Select the type of change that you&apos;re committing:
                  <span style={{color: '#00afff'}}>&nbsp;feat:&nbsp;&nbsp;&nbsp;&nbsp;A new feature</span>
                </div>
                <div>
                  <span style={{color: '#00ff00'}}>?</span> Denote the scope of this change ($location, $browser,
                  $compile, etc.):
                </div>
                <div style={{color: '#00afff'}}>&nbsp;table-component</div>
                <div>
                  <span style={{color: '#00ff00'}}>?</span> Write a short, imperative tense description of the change:
                </div>
                <div style={{color: '#00afff'}}>&nbsp;Add column sort</div>
                <div><span style={{color: '#00ff00'}}>?</span> Provide a longer description of the change:</div>
                <div style={{color: '#00afff'}}>&nbsp;Acending and decending sort orders were added</div>
                <div><span style={{color: '#00ff00'}}>?</span> List any breaking changes:</div>
                <div style={{color: '#00afff'}}>&nbsp;Adds a new required prop</div>
                <div><span style={{color: '#00ff00'}}>?</span> List any issues closed by this change:</div>
                <div><Typist cursor={cursor}>&nbsp;closes #123</Typist></div>
              </div>,
              <div key="hack to prevent showing the last item too early" />
            ]
          ]}
        />
      </Slide>
      <CodeSlide
        lang="git"
        code={require('../../assets/commit.example')}
        notes={notesForCommitizen}
        showLineNumbers={false}
        ranges={[
          {
            loc: [6, 7],
            title: 'Header',
            note: 'The commit type, scope, and short description (subject) are combined into the header'
          },
          {
            loc: [8, 9],
            title: 'Body',
            note: 'The longer description is added as the commit body'
          },
          {
            loc: [10, 11],
            title: 'Breaking Changes',
            note: 'The breaking changes are added as a footer line, prefixed with `BREAKING CHANGE: `'
          },
          {
            loc: [12, 13],
            title: 'Issue Reference',
            note: 'The issue reference is added as another footer line'
          }
        ]}
      />
      <Slide transition={['slide']}>
        <Heading size={1} fit>It&apos;s Easy to Forget to</Heading>
        <Heading size={2} fit>Follow the Format</Heading>
      </Slide>
      <CodeSlide
        lang="json"
        code={require('../../assets/package.npm.example')}
        ranges={[
          {
            loc: [16, 17],
            note: 'husky can be used for more git hooks',
            title: 'husky'
          },
          {
            loc: [9, 10],
            note: 'Ensure the commit passes all tests before committing',
            title: 'Verification'
          },
          {
            loc: [8, 9],
            note: 'Ensure the commit message is compatible with semantic-release',
            title: 'Commit pattern verification'
          }
        ]}
      />
      <Slide transition={['slide']}>
        <Heading size={1} caps fit>Commit Message Validation Failure</Heading>
        <Terminal
          title="~/development/gain/front-end/react-components @ Travi-MBP"
          output={[
            <Typist cursor={cursor} key="bad commit">git commit -m &apos;foo&apos;</Typist>,
            <div key="invalid commit warning">
              <div>Now using node v7.4.0 (npm v4.0.5)</div>
              <div />
              <div>&gt; husky - npm run -s commitmsg</div>
              <div />
              <div>INVALID COMMIT MSG: does not match &quot;&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;&quot; !</div>
              <div>foo</div>
              <div />
              <div>&gt; husky - commit-msg hook failed (add --no-verify to bypass)</div>
              <div>&gt; husky - to debug, use &apos;npm run commitmsg&apos;</div>
            </div>
          ]}
        />
      </Slide>
      <Slide transition={['slide']}>
        <Heading size={1} fit>Start the commit message with <Code>wip</Code> to skip validation</Heading>
      </Slide>
      <CodeSlide
        lang="yaml"
        code={require('../../assets/travis.npm.example')}
        ranges={[
          {
            loc: [1, 5],
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
            loc: [19, 20],
            title: 'Version',
            note: 'Only defined to prevent a cli warning. It is overwritten by semantic-release before publishing'
          },
          {
            loc: [10, 11],
            title: 'Pre-pack',
            note: 'Any npm script can have a pre or post script. This script builds the bundled modules before pack, ' +
            'which happens before publish'
          },
          {loc: [7, 8], title: 'Rollup', note: 'Build bundles for distribution'},
          {
            loc: [20, 22],
            title: 'Bundles',
            note: '`main` defines the common-js bundle. `module` defines the es module'
          }
        ]}
      />
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
      <Slide transition={['zoom']}>
        <Heading size={1} fit>
          Cascading Dependency Updates
        </Heading>
      </Slide>
      <Slide bgColor="white">
        <ImageSlide title="Cascade" image={images.cascade.replace('/', '')} />
      </Slide>
      <Slide bgColor="black" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">Caveats</Heading>
        <List textColor="white">
          <Appear><ListItem>PRs for private packages only triggered by private npm</ListItem></Appear>
          <Appear><ListItem>Other registries like Nexus or Artifactory are not supported</ListItem></Appear>
        </List>
      </Slide>
      <Slide transition={['slide']}>
        <Heading size={1} fit>
          Continuous Deployment isn&apos;t an option on my team
        </Heading>
        <Heading size={2} caps fit textFont="primary">
          How can I dial this back&#63;
        </Heading>
        <List textColor="white">
          <Appear><ListItem>Continuously deploy packages, but not the application</ListItem></Appear>
          <Appear><ListItem>Consider starting with semantic-release</ListItem></Appear>
          <Appear><ListItem>Introduce greenkeeper later</ListItem></Appear>
          <Appear><ListItem>Consider the debt of opening PRs, but accepting later</ListItem></Appear>
          <Appear><ListItem>greenkeeper-keeper instance before Greenkeeper</ListItem></Appear>
        </List>
      </Slide>
      <Slide transition={['slide']}>
        <Heading size={1} fit>
          Services
        </Heading>
        <Heading size={2} caps fit textFont="primary">
          Value has made investment in specific services worthwhile
        </Heading>
        <List textColor="white">
          <Appear><ListItem>GitHub</ListItem></Appear>
          <Appear><ListItem>Travis CI</ListItem></Appear>
          <Appear><ListItem>Private npm</ListItem></Appear>
        </List>
      </Slide>
      <Slide bgColor="white">
        <Heading size={1} fit textColor="rgb(13,114,185)" textFont="Impact" style={{fontVariant: 'small-caps'}}>
          Matt Travi
        </Heading>
        <Image
          src="https://storage.googleapis.com/static.gaincompliance.com/logo-square.svg"
          height={logoSize}
          width={logoSize}
          style={{float: 'right'}}
        />
        <List textColor="rgb(0,165,225)">
          <ListItem>
            <Link textColor="rgb(0,165,225)" href="https://matt.travi.org">https://matt.travi.org</Link>
          </ListItem>
          <ListItem>
            <Link textColor="rgb(0,165,225)" href="https://presentations.travi.org">
              https://presentations.travi.org
            </Link>
          </ListItem>
          <ListItem>
            <Link textColor="rgb(0,165,225)" href="https://gaincompliance.com">https://gaincompliance.com</Link>
          </ListItem>
        </List>
      </Slide>
    </Deck>
  );
}

Presentation.displayName = 'Presentation';
