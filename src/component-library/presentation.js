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

    </Deck>
  );
}

Presentation.displayName = 'Presentation';
