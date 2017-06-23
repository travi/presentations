import React from 'react';
import createTheme from 'spectacle/lib/themes/default';
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Heading,
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
    </Deck>
  );
}

Presentation.displayName = 'Presentation';
