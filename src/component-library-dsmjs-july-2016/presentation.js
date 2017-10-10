import React from 'react';
import createTheme from 'spectacle/lib/themes/default';
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Quote,
  S,
  Slide,
  Text
} from 'spectacle';
import ImageSlide from 'spectacle-image-slide';
import preloader from 'spectacle/lib/utils/preloader';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

const theme = createTheme({
  primary: '#333',
  secondary: '#e5e5e5',
  tertiary: '#e5e5e5'
});

const images = {
  atomicDesign: require('../../assets/atomic-design.png')
};

const storybookExampleLink = 'https://travi.github.io/admin.travi.org-components/?selectedKind=Resource%20List' +
  '&selectedStory=rides%20list&full=0&down=1&left=1';
const infoAddonExampleLink = 'https://travi.github.io/admin.travi.org-components/?selectedKind=Resource%20List' +
  '&selectedStory=rides%20list&full=0&down=1&left=1';
const npmPublishExampleLink = 'https://github.com/travi/admin.travi.org-components/blob/' +
  'a9721b06a333715e65d150ef01b273d4195aa6e6/.travis.yml#L11-L18';

preloader(images);

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

      <Slide>
        <Heading size={1} fit>Is the Goal Too Optimistic?</Heading>
        <Heading size={3} fit textColor="#888" textFont="primary">
          I’ve witnessed several attempts fail miserably
        </Heading>

        <List>
          <Appear>
            <ListItem>
              In reality things start to diverge as soon as you start implementing the production application
              <List style={{marginLeft: 50}}>
                <Appear><ListItem>Design team makes updates based on new findings</ListItem></Appear>
                <Appear>
                  <ListItem>
                    Engineering under pressure to keep building more features, not continuously update the
                    implementation to align perfectly with the style guide
                  </ListItem>
                </Appear>
              </List>
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit>Side Effects</Heading>

        <List>
          <Appear>
            <ListItem>
              High-fidelity mockups distract engineering team with details that are not currently important
              <List style={{marginLeft: 50}}>
                <Appear>
                  <ListItem>PO typically is not clear on what the design team considers important</ListItem>
                </Appear>
              </List>
            </ListItem>
          </Appear>
          <Appear><ListItem>Fingerpointing</ListItem></Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit>Some Background on Dwolla’s Approach to</Heading>
        <Heading size={2} fit>Front-End Development</Heading>

        <List>
          <Appear><ListItem>Traditionally, engineering handled back-end development</ListItem></Appear>
          <Appear><ListItem>Front-end work mostly handed off to the design team</ListItem></Appear>
          <Appear>
            <ListItem>
              Company became even further focused on APIs last year, so front-end work lost focus even further
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit>Regained Focus on Front-End</Heading>

        <List>
          <Appear><ListItem>Recently prioitized a new web app to support our API partners</ListItem></Appear>
          <Appear>
            <ListItem>
              <Link
                textColor="#888"
                target="_blank"
                href="https://www.dwolla.com/updates/coming-soon-a-new-dashboard-for-dwolla-white-label-integrations/"
              >
                Coming Soon: A new dashboard for Dwolla White Label integrations
              </Link>
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit>Already Seeing the Same Problems</Heading>

        <List>
          <Appear>
            <ListItem>
              Prototype far ahead with little to no engineering input
              <List style={{marginLeft: 50}}>
                <Appear><ListItem>Setting expectations with stakeholders</ListItem></Appear>
              </List>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Tech choices
              <List style={{marginLeft: 50}}>
                <Appear><ListItem><S type="italic">Prototype:</S> jQuery + global styles</ListItem></Appear>
                <Appear><ListItem><S type="italic">Production:</S> React + css modules</ListItem></Appear>
              </List>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Desire from management to share <Code textColor="#888">scss</Code> to speed up implementation
            </ListItem>
          </Appear>
          <Appear><ListItem>Fingerpointing</ListItem></Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit>Align Around Components</Heading>
        <Heading size={2} textColor="#888" fit>Rather than place blame, find a way to improve</Heading>
      </Slide>

      <Slide>
        <Heading size={1} fit>Atomic Design</Heading>
        <Heading size={3} fit textColor="#888" textFont="primary" style={{padding: '0 0 20px 0'}}>
          Our teams were already aligned here
        </Heading>

        <BlockQuote
          style={{borderLeft: '#ccc'}}
          cite="http://bradfrost.com/blog/mobile/bdconf-stephen-hay-presents-responsive-design-workflow/"
        >
          <Quote textColor="#666">We’re not designing pages, we’re designing systems of components.</Quote>
          <Cite>Stephen Hay</Cite>
        </BlockQuote>
      </Slide>

      <Slide>
        <ImageSlide image={images.atomicDesign.replace('/', '')} />
      </Slide>

      <Slide>
        <Heading size={1} fit>Pattern Lab</Heading>
        <Link textColor="#888" href="http://demo.patternlab.io/" target="_blank">http://demo.patternlab.io/</Link>
      </Slide>

      <Slide>
        <Heading size={1} fit>Engineering Approach to Components</Heading>
        <Heading size={3} fit textColor="#888" textFont="primary">Modularity is Foundational</Heading>

        <List>
          <Appear>
            <ListItem>
              React
              <List style={{marginLeft: 50}}>
                <Appear><ListItem>Component composition</ListItem></Appear>
                <Appear><ListItem>Encapsulation of implementation details</ListItem></Appear>
              </List>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              CSS Modules
              <List style={{marginLeft: 50}}>
                <Appear><ListItem>Namespacing of style rules to a single component</ListItem></Appear>
              </List>
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit>CSS Modules</Heading>
        <Heading size={3} fit textColor="#888" textFont="primary">Namespace CSS rules to a single component</Heading>

        <CodePane lang="jsx" source={require('../../assets/css-module.example')} />

        Results in:

        <CodePane lang="javascript" source={require('../../assets/css-module-html.example')} />
      </Slide>

      <Slide>
        <Heading size={1} fit>Aligned, right?</Heading>
      </Slide>

      <Slide>
        <Heading size={1} fit>Not Quite</Heading>
        <Heading size={3} fit textColor="#888" textFont="primary">
          Most teams start falling apart with this goal after aligning on dogma
        </Heading>

        <List>
          <Appear><ListItem>Prototype and production app are separate implementations</ListItem></Appear>
          <Appear>
            <ListItem>
              Desire to share style sheets
              <List style={{marginLeft: 50}}>
                <Appear>
                  <ListItem>Management was confident that this would significantly improve velocity</ListItem>
                </Appear>
                <Appear><ListItem>Hesitation to give up ownership of styles</ListItem></Appear>
                <Appear><ListItem>Quickly became difficult because of diverging markup</ListItem></Appear>
              </List>
            </ListItem>
          </Appear>
          <Appear><ListItem>Team was learning and updating previous decisions</ListItem></Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit>Misaligned Priorities</Heading>

        <List>
          <Appear><ListItem>Design team far ahead</ListItem></Appear>
          <Appear><ListItem>Once an engineering priority, many decisions already made without input</ListItem></Appear>
          <Appear>
            <ListItem>
              Design team had moved on to new priorities, making changes to the styles that they owned difficult
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit>Shared Codebase</Heading>
        <Heading size={3} fit textColor="#888" textFont="primary">A chance of success</Heading>
      </Slide>

      <Slide>
        <Heading size={1} fit>Realignment on Componentization</Heading>
      </Slide>

      <Slide>
        <Heading size={1} fit>Working Software Over</Heading>
        <Heading size={1} fit>Comprehensive Documentation</Heading>

        <List>
          <Appear>
            <ListItem>Details that aren’t in the production implementation are a form of documentation</ListItem>
          </Appear>
          <Appear><ListItem>Whether a design spec, style guide, component library, or prototype</ListItem></Appear>
          <Appear>
            <ListItem>If it needs to be translated to production code, details can and will be lost</ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit>Get Over the Traditional</Heading>
        <Heading size={1} fit>Separation-of-Concerns Mentality</Heading>

        <List>
          <Appear><ListItem>stop separating by technology</ListItem></Appear>
          <Appear><ListItem>instead, group by responsibility</ListItem></Appear>
          <Appear>
            <ListItem>
              bundle markup generation, style, and behavior together
              <List style={{marginLeft: 50}}>
                <Appear><ListItem>Code that changes together should be packaged together</ListItem></Appear>
                <Appear><ListItem>Improve chances of dead code removal</ListItem></Appear>
              </List>
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit>Things that change together</Heading>
        <Heading size={1} fit>should be packaged together</Heading>

        <Appear><CodePane lang="bash" source={require('../../assets/component-tree.example')} /></Appear>

        <List>
          <Appear><ListItem>far simpler to coordinate changes than when packaged separately</ListItem></Appear>
          <Appear>
            <ListItem>Also simplifies removal of dead code (styles) when sunsetting a component</ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit style={{padding: 10}}>Isolate the Components</Heading>

        <Link textColor="#888" target="_blank" href="http://react-components.dwolla.net">
          http://react-components.dwolla.net
        </Link>

        <Text textColor="secondary" style={{margin: 50}}>(internal only for now)</Text>
      </Slide>

      <Slide>
        <Heading size={1} fit>React Storybook</Heading>
        <Heading size={3} fit textColor="#888" textFont="primary">
          Better fit for React components than current state of Pattern Lab
        </Heading>

        <CodePane lang="jsx" source={require('../../assets/storybook.example')} />

        <Link
          textColor="#888"
          target="_blank"
          href={storybookExampleLink}
        >
          Example
        </Link>
      </Slide>

      <Slide>
        <Heading size={1} fit>Storybook Addons</Heading>
        <Heading size={3} textColor="#888" textFont="primary">Info Addon</Heading>

        <CodePane lang="jsx" source={require('../../assets/storybook-info-addon.example')} />

        <Link
          textColor="#888"
          target="_blank"
          href={infoAddonExampleLink}
        >
          Example
        </Link>
      </Slide>

      <Slide>
        <Heading size={1} fit>Storybook Fit</Heading>

        <List>
          <Appear><ListItem>Great job demoing components in isolation</ListItem></Appear>
          <Appear><ListItem>Encourages pure components</ListItem></Appear>
          <Appear>
            <ListItem>Provides <Code textColor="#888">linkTo</Code> function for transitioning between states</ListItem>
          </Appear>
          <Appear><ListItem>Provides <Code textColor="#888">action</Code> function to log events</ListItem></Appear>
          <Appear><ListItem>Supports hot-reload for quick development iteration</ListItem></Appear>
          <Appear>
            <ListItem>
              Supports building a&nbsp;
              <Link textColor="#888" target="_blank" href="https://travi.github.io/admin.travi.org-components/">
                static site
              </Link>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <S type="bold">GAP</S>: Does not yet support hierarchy, so unable to structure like Atomic Design
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit>Contributions</Heading>
        <Heading size={3} fit textColor="#888" textFont="primary">Promote collective ownership</Heading>

        <List>
          <Appear>
            <ListItem>
              Anyone on the team can open a PR
              <List style={{marginLeft: 50}}>
                <Appear>
                  <ListItem>
                    Even our lead designer, who had never used git before, is making direct contributions
                  </ListItem>
                </Appear>
              </List>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Anyone can provide feedback on a PR
              <List style={{marginLeft: 50}}>
                <Appear><ListItem>Engineering practices, code structure, refactoring</ListItem></Appear>
                <Appear><ListItem>Alignment to design goals</ListItem></Appear>
              </List>
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit>Reviews</Heading>

        <List>
          <Appear><ListItem>Reviewing code often simple enough through the web interface</ListItem></Appear>
          <Appear>
            <ListItem>
              Design review slightly more involved
              <List style={{marginLeft: 50}}>
                <Appear><ListItem><Code textColor="#888">git co (branch) && npm start</Code></ListItem></Appear>
                <Appear>
                  <ListItem>
                    Isolation of components enables viewing and interacting w/o launching the whole system
                  </ListItem>
                </Appear>
              </List>
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit>Review Goal</Heading>
        <Heading size={3} fit textColor="#888" textFont="primary">
          Everything merged to master should be ready for production
        </Heading>
      </Slide>

      <Slide>
        <Heading size={1} fit>Publish</Heading>
        <Heading size={3} fit textColor="#888" textFont="primary">Now we need to get the code into the apps</Heading>
      </Slide>

      <Slide>
        <Heading size={1} fit>Multiple Consumers</Heading>

        <List>
          <Appear><ListItem>Prototype</ListItem></Appear>
          <Appear><ListItem>Production app</ListItem></Appear>
          <Appear><ListItem>Possible future apps</ListItem></Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit>Package Management Options</Heading>

        <List>
          <Appear>
            <ListItem>
              We wanted to use <Code textColor="#888">webpack</Code>,
              so <Code textColor="#888">npm</Code> was the natural fit
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <Code textColor="#888">bower</Code>, <Code textColor="#888">jspm</Code>,
              and others could accomplish a similar outcome
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit>npm Registry Options</Heading>

        <Appear style={{textAlign: 'left'}}>
          <div>
            <Heading size={3} textColor="#888" textFont="primary" style={{textAlign: 'left'}}>Public</Heading>
            <List><Appear><ListItem>Main Registry</ListItem></Appear></List>
          </div>
        </Appear>

        <Appear style={{textAlign: 'left'}}>
          <div>
            <Heading size={3} textColor="#888" textFont="primary" style={{textAlign: 'left'}}>Private</Heading>
            <List>
              <Appear><ListItem>Private <Code textColor="#888">npm</Code></ListItem></Appear>
              <Appear><ListItem>Artifactory</ListItem></Appear>
              <Appear><ListItem>Nexus</ListItem></Appear>
              <Appear><ListItem>Git</ListItem></Appear>
            </List>
          </div>
        </Appear>
      </Slide>

      <Slide>
        <Heading size={1} fit>Scoped Packages</Heading>

        <List>
          <Appear><ListItem>Don’t pollute the global namespace if you don’t expect broad package use</ListItem></Appear>
          <Appear>
            <ListItem>
              Each scope can be tied to a registry
              <List style={{marginLeft: 50}}>
                <Appear>
                  <ListItem>
                    specify in <Code textColor="#888">.npmrc</Code> in the project root
                    <CodePane lang="ini" source={require('../../assets/npmrc.example')} />
                  </ListItem>
                </Appear>
              </List>
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit>Our Scopes</Heading>

        <List>
          <Appear>
            <ListItem>
              Current
              <List style={{marginLeft: 50}}>
                <Appear><ListItem><Code textColor="#888">@dwolla-internal</Code></ListItem></Appear>
              </List>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Once we release publicly
              <List style={{marginLeft: 50}}>
                <Appear><ListItem><Code textColor="#888">@dwolla</Code></ListItem></Appear>
              </List>
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit>Version</Heading>

        <Appear style={{textAlign: 'left'}}>
          <div>
            <Heading size={3} textColor="#888" textFont="primary" style={{textAlign: 'left'}}>
              <Code textColor="#888">npm version</Code>
            </Heading>
            <List><Appear><ListItem>provides info about the current version</ListItem></Appear></List>
          </div>
        </Appear>

        <Appear style={{textAlign: 'left'}}>
          <div>
            <Heading size={3} textColor="#888" textFont="primary" style={{textAlign: 'left'}}>
              <Code textColor="#888">npm version (major|minor|patch)</Code>
            </Heading>
            <List>
              <Appear><ListItem>Increments version based on semver</ListItem></Appear>
              <Appear><ListItem>Commits the verion bump</ListItem></Appear>
              <Appear><ListItem>Tags the commit</ListItem></Appear>
            </List>
          </div>
        </Appear>
      </Slide>

      <Slide>
        <Heading size={1} fit>Publish</Heading>
        <Heading size={3} textColor="#888" style={{textAlign: 'left'}}>
          <Code textColor="#888">npm publish</Code>
        </Heading>

        <List>
          <Appear><ListItem>Publishes current version to the registry</ListItem></Appear>
          <Appear>
            <ListItem>
              <S type="bold">Recommendation</S>: Configue CI server to do this step
              <List style={{marginLeft: 50}}>
                <Appear>
                  <ListItem>
                    Even removes the need to have a token in your <Code textColor="#888">~/.npmrc</Code>
                    (from <Code textColor="#888">npm login</Code>)
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem>
                    <Link textColor="#888" target="_blank" href={npmPublishExampleLink}>Example</Link>
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem>
                    <Link textColor="#888" target="_blank" href="https://docs.travis-ci.com/user/deployment/npm">
                      Travis CI Docs
                    </Link>
                  </ListItem>
                </Appear>
              </List>
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit>Publish Example</Heading>
        <Heading size={3} textColor="#888" textFont="primary">Travis CI</Heading>

        <CodePane lang="yaml" source={require('../../assets/npm-publish.example')} />
      </Slide>

      <Slide>
        <Heading size={1} fit>Automation</Heading>
        <Heading size={3} fit textColor="#888" textFont="primary">
          All npm scripts support <Code textColor="#888">pre</Code> and <Code textColor="#888">post</Code> scripts
        </Heading>

        <Appear style={{textAlign: 'left'}}>
          <div>
            <Heading size={3} textColor="#888" textFont="primary" style={{textAlign: 'left'}}>
              Prevent tagging a bad version
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  Use <Code textColor="#888">preversion</Code> to run your tests &amp; other verification
                </ListItem>
              </Appear>
            </List>
          </div>
        </Appear>

        <Appear style={{textAlign: 'left'}}>
          <div>
            <Heading size={3} textColor="#888" textFont="primary" style={{textAlign: 'left'}}>
              Build before publishing
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  Use <Code textColor="#888">prepublish</Code> to <Code textColor="#888">transpile</Code> and perform
                  other build steps before publishing
                  <List style={{marginLeft: 50}}>
                    <Appear>
                      <ListItem>
                        Be mindful of <Code textColor="#888">.gitignore</Code> and
                        <Code textColor="#888">.npmignore</Code>
                      </ListItem>
                    </Appear>
                  </List>
                </ListItem>
              </Appear>
            </List>
          </div>
        </Appear>
      </Slide>

      <Slide>
        <Heading size={1} fit>Example Scripts</Heading>

        <CodePane lang="json" source={require('../../assets/npm-scripts.example')} />
      </Slide>

      <Slide>
        <Heading size={1} fit>Doesn’t this make it harder to see how the</Heading>
        <Heading size={1} fit>components work in the context of your app?</Heading>
      </Slide>

      <Slide>
        <Heading size={1}>Yes</Heading>
        <Heading size={3} textColor="#888" textFont="primary" fit>But we don’t have to be satisfied with that</Heading>
      </Slide>

      <Slide>
        <Heading size={1} fit>
          Depending on versions not in <Code textColor="secondary" textSize="1.66rem">master</Code>
        </Heading>

        <Appear style={{textAlign: 'left'}}>
          <div>
            <Heading size={3} textColor="#888" textFont="primary" style={{textAlign: 'left'}}>Deployed App</Heading>
            <Heading size={4} textColor="secondary" style={{textAlign: 'left'}}>Depend on a git branch</Heading>

            <CodePane lang="json" source={require('../../assets/git-dependency.example')} />
          </div>
        </Appear>

        <Appear style={{textAlign: 'left'}}>
          <div>
            <Heading size={3} textColor="#888" textFont="primary" style={{textAlign: 'left'}}>
              Local Development
            </Heading>
            <Heading size={4} textColor="secondary" style={{textAlign: 'left'}}>
              Use <Code textColor="secondary">npm link</Code>
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  From package: <Code textColor="#888">npm link</Code> to make it available for linking
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>From consumer: <Code textColor="#888">npm link @scope/package-name</Code></ListItem>
              </Appear>
              <Appear><ListItem>Enable a watcher to build package when changed</ListItem></Appear>
              <Appear>
                <ListItem>
                  Hot-reloader and <Code textColor="#888">nodemon</Code> need to include
                  <Code textColor="#888">node_modules/</Code>
                </ListItem>
              </Appear>
            </List>
          </div>
        </Appear>
      </Slide>

      <Slide>
        <Heading size={1} fit>Webpack Gotcha</Heading>

        <List>
          <Appear><ListItem>npm packages use their own local dependency tree</ListItem></Appear>
          <Appear><ListItem>webpack loaders get confused w/o additional config</ListItem></Appear>
        </List>

        <Appear><CodePane lang="js" source={require('../../assets/resolve-loader.example')} /></Appear>
      </Slide>

      <Slide>
        <Heading size={1} fit>Webpack Painpoint</Heading>

        <List>
          <Appear><ListItem>Powerful and works well once configured appropriately</ListItem></Appear>
          <Appear>
            <ListItem>Even the smallest config change can take significant effort to understand</ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1}>Results</Heading>
        <Heading size={3} fit textColor="#888" textFont="primary">Still a work in progress</Heading>

        <List>
          <Appear><ListItem>Solved the technical hurdles</ListItem></Appear>
          <Appear><ListItem>Making good progress on process and collaboration</ListItem></Appear>
          <Appear>
            <ListItem>
              Haven’t rebuilt the prototype yet
              <List style={{marginLeft: 50}}>
                <Appear><ListItem>Not sure what pain points will arise with WIP design changes</ListItem></Appear>
                <Appear>
                  <ListItem>Confident it will encourage collabaration rather than working in silos</ListItem>
                </Appear>
              </List>
            </ListItem>
          </Appear>
          <Appear><ListItem>Hoping to make our component library public</ListItem></Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit>Matt Travi</Heading>

        <Layout>
          <Fill>
            <Image
              style={{border: '10px solid #e5e5e5'}}
              src="https://secure.gravatar.com/avatar/552ffda146c8a19730e4e9a27dafb749?size=350"
            />
          </Fill>
          <Fill>
            <List>
              <ListItem>
                <Link textColor="#888" target="_blank" href="https://matt.travi.org">matt.travi.org</Link>
              </ListItem>
              <ListItem>
                <Link textColor="#888" target="_blank" href="https://github.com/travi">github.com/travi</Link>
              </ListItem>
              <ListItem>
                <Link textColor="#888" target="_blank" href="https://twitter.com/mtravi">twitter.com/mtravi</Link>
              </ListItem>
              <ListItem>
                <Link textColor="#888" target="_blank" href="https://presentations.travi.org">
                  presentations.travi.org
                </Link>
              </ListItem>
            </List>
          </Fill>
        </Layout>
      </Slide>
    </Deck>
  );
}

Presentation.displayName = 'Presentation';
