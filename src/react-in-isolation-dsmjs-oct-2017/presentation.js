import React from 'react';
import createTheme from 'spectacle/lib/themes/default';
import {Appear, Deck, Fill, Fit, Heading, Image, Layout, Link, List, ListItem, Slide, Text} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import Terminal from 'spectacle-terminal';
import CodeSlide from 'spectacle-code-slide';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';
import Typist from 'react-typist';

const theme = createTheme({
  primary: '#333',
  secondary: '#fff',
  tertiary: '#61dafb'
});

const images = {
  enzyme: require('../../assets/react-in-isolation/enzyme.png'),
  unidirectional: require('../../assets/react-in-isolation/unidirectional-data-flow.png'),
  userAction: require('../../assets/react-in-isolation/flux-client-action.png')
};
preloader(images);

const cursor = {show: false, blink: true, element: '|', hideWhenDone: false, hideWhenDoneDelay: 1000};

export default function Presentation() {
  return (
    <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
      <Slide
        transition={['zoom']}
        bgDarken={0.75}
        bgImage={require('../../assets/react-in-isolation/react-logo.svg')}
      >
        <Heading size={1} fit caps>
Learn React
        </Heading>
        <Heading size={2} fit caps>
in Isolation
        </Heading>

        <Text textColor="#888" textSize="1em" margin="40px 0px 0px" bold>
Matt Travi
        </Text>
      </Slide>

      <Slide transition={['zoom']}>
        <Heading size={1} fit>
Not an intro to React
        </Heading>
        <Heading size={2} fit>
Instead, how to learn React
        </Heading>
      </Slide>

      <Slide>
        <Heading size={2} fit>
React, by itself, can be simple
        </Heading>
      </Slide>

      <Slide>
        <Heading size={2} fit>
          That simplicity is clouded in an application
        </Heading>
      </Slide>

      <Slide>
        <Heading size={2} fit>
Build Tools
        </Heading>

        <List>
          <ListItem>
Transpilation (Babel)
          </ListItem>
          <ListItem>
            Bundling for the browser (Webpack)
            <List>
              <ListItem>
Dev Server
              </ListItem>
              <ListItem>
Hot Reload
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Slide>

      <Slide>
        <Heading size={2} fit>
Application Wiring
        </Heading>

        <List>
          <ListItem>
Loading data into the browser (Redial, etc)
          </ListItem>
          <ListItem>
State management (Redux, MobX, etc)
          </ListItem>
          <ListItem>
Routing (React Router)
          </ListItem>
          <ListItem>
Server-side Render?
          </ListItem>
        </List>
      </Slide>

      <Slide transition={['zoom']}>
        <Heading size={1} fit>
How can we isolate React
        </Heading>
        <Heading size={2} fit>
to learn it without the distractions?
        </Heading>
      </Slide>

      <Slide transition={['zoom']}>
        <Heading size={1}>
Hello World
        </Heading>
      </Slide>

      <CodeSlide
        lang="jsx"
        code={require('../../assets/react-in-isolation/create-element-hello-world.example')}
        ranges={[
          {
            loc: [2, 9],
            note: 'JavaScript component',
            title: 'createElement'
          }
        ]}
      />

      <CodeSlide
        lang="jsx"
        code={require('../../assets/react-in-isolation/jsx-hello-world.example')}
        ranges={[
          {
            loc: [2, 5],
            title: 'JSX'
          }
        ]}
      />

      <CodeSlide
        lang="jsx"
        code={require('../../assets/react-in-isolation/string-hello-world.example')}
        ranges={[
          {
            loc: [0, 3],
            note: 'Strings can now be rendered directly',
            title: 'React 16'
          }
        ]}
      />

      <Slide transition={['zoom']}>
        <Heading size={1} fit>
But what do I do with these components
        </Heading>
        <Heading size={2} fit>
without an application?
        </Heading>
      </Slide>

      <Slide transition={['zoom']}>
        <Link href="https://storybook.js.org/" target="_blank">
          <Image width="80%" src={require('../../assets/react-in-isolation/storybook.svg')} />
        </Link>
      </Slide>

      <Slide bgColor="#888">
        <Heading size={2} fit>
Configuring Storybook
        </Heading>

        <Terminal
          title="~/development/react-in-isolation @ Travi-MBP"
          output={[
            <Typist cursor={cursor} key="storybook cli">
npm i -g @storybook/cli
            </Typist>,
            <div key="cli installation">
              <div style={{color: 'rgb(48, 53, 57)'}}>
.
              </div>
              <div>
+ @storybook/cli@3.2.12
              </div>
              <div>
added 379 packages in 93.821s
              </div>
              <div style={{color: 'rgb(48, 53, 57)'}}>
.
              </div>
            </div>,
            <Typist cursor={cursor} key="storybook init">
getstorybook
            </Typist>,
            <div key="init results">
              <div style={{color: 'rgb(48, 53, 57)'}}>
.
              </div>
              <div style={{backgroundColor: 'white', color: 'black'}}>
                &nbsp;getstorybook - the simplest way to add a storybook to your project.
              </div>
              <div style={{color: 'rgb(48, 53, 57)'}}>
.
              </div>
              <div>
&nbsp;• Detecting project type.
                <span style={{color: '#00ff00'}}>
✓
                </span>
              </div>
              <div>
                &nbsp;• Adding storybook support to your &quot;React&quot; app.
                &nbsp;
                <span style={{color: '#00ff00'}}>
✓
                </span>
              </div>
              <div>
&nbsp;• Preparing to install dependencies.
                <span style={{color: '#00ff00'}}>
✓
                </span>
              </div>
            </div>
          ]}
        />
      </Slide>

      <CodeSlide
        lang="json"
        code={require('../../assets/package.npm.example')}
        ranges={[
          {
            loc: [14, 16],
            title: 'Storybook',
            note: 'scripts to run and build are added'
          }
        ]}
      />

      <Slide>
        <Heading size={2} fit>
Build Details Handled by Storybook
        </Heading>

        <List>
          <ListItem>
Transpilation (Babel)
          </ListItem>
          <ListItem>
            Bundling for the browser (Webpack)
            <List>
              <ListItem>
Dev Server
              </ListItem>
              <ListItem>
Hot Reload
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Slide>

      <CodeSlide
        lang="jsx"
        code={require('../../assets/react-in-isolation/hello-world-stories.example')}
        ranges={[
          {
            loc: [2, 5],
            note: 'import the components',
            title: 'Stories'
          },
          {
            loc: [6, 7],
            note: 'Define the category',
            title: 'Stories'
          },
          {
            loc: [7, 10],
            note: 'Render the stories',
            title: 'Stories'
          }
        ]}
      />

      <Slide>
        <Link href="https://travi.github.io/react-in-isolation/?selectedKind=Functional" target="_blank">
          <Heading size={2}>
Demo
          </Heading>
        </Link>
      </Slide>

      <Slide transition={['zoom']}>
        <Heading size={1} fit>
Props
        </Heading>
      </Slide>

      <CodeSlide
        lang="jsx"
        code={require('../../assets/react-in-isolation/props.example')}
        ranges={[
          {
            loc: [8, 11],
            note: 'variable passed as a prop',
            title: 'Props'
          },
          {
            loc: [5, 6],
            note: 'variable passed as a prop',
            title: 'Props'
          },
          {
            loc: [11, 18],
            note: 'booleans can be passed as a flag',
            title: 'Props'
          },
          {
            loc: [15, 16],
            note: 'booleans can be passed as a flag',
            title: 'Props'
          }
        ]}
      />

      <Slide>
        <Link href="https://travi.github.io/react-in-isolation/?selectedKind=Props%2FButton" target="_blank">
          <Heading size={2}>
Demo
          </Heading>
        </Link>
      </Slide>

      <CodeSlide
        lang="jsx"
        code={require('../../assets/react-in-isolation/handlers.example')}
        ranges={[
          {
            loc: [8, 15],
            note: 'functions passed as props',
            title: 'Handlers'
          },
          {
            loc: [12, 13],
            note: 'functions passed as props',
            title: 'Handlers'
          }
        ]}
      />

      <Slide>
        <Link href="https://travi.github.io/react-in-isolation/?selectedKind=Handlers%2FButton" target="_blank">
          <Heading size={2}>
Demo
          </Heading>
        </Link>
      </Slide>

      <Slide transition={['zoom']}>
        <Heading size={1}>
Encapsulation
        </Heading>
      </Slide>

      <CodeSlide
        lang="jsx"
        code={require('../../assets/react-in-isolation/button.example')}
        ranges={[
          {
            loc: [2, 7],
            note: 'props',
            title: 'Button Component'
          },
          {
            loc: [17, 18],
            note: 'label prop',
            title: 'Button Component'
          },
          {
            loc: [9, 10],
            note: 'disabled prop',
            title: 'Button Component'
          },
          {
            loc: [15, 16],
            note: 'click handler',
            title: 'Button Component'
          },
          {
            loc: [10, 15],
            note: 'also leverage `disabled` to determine cursor',
            title: 'Button Component'
          }
        ]}
      />

      <CodeSlide
        lang="jsx"
        code={require('../../assets/react-in-isolation/props.example')}
        ranges={[
          {
            loc: [18, 21],
            note: 'variable passed as a prop',
            title: 'Props'
          },
          {
            loc: [21, 24],
            note: 'booleans can be passed as a flag',
            title: 'Props'
          }
        ]}
      />

      <CodeSlide
        lang="jsx"
        code={require('../../assets/react-in-isolation/handlers.example')}
        ranges={[
          {
            loc: [15, 21],
            note: 'functions passed as props',
            title: 'Handlers'
          },
          {
            loc: [18, 19],
            note: 'functions passed as props',
            title: 'Handlers'
          }
        ]}
      />

      <Slide>
        <Link href="https://travi.github.io/react-in-isolation/?selectedKind=Handlers%2FButton" target="_blank">
          <Heading size={2}>
Demo
          </Heading>
        </Link>
      </Slide>

      <Slide transition={['zoom']}>
        <Heading size={1} fit>
Flux
        </Heading>
      </Slide>

      <Slide>
        <Heading size={2} fit>
Unidirectional Data Flow
        </Heading>

        <Image src={images.unidirectional.replace('/', '')} />
      </Slide>

      <Slide>
        <Heading size={2} fit>
User Action
        </Heading>

        <Image src={images.userAction.replace('/', '')} />
      </Slide>

      <Slide>
        <Heading size={2} fit>
Functional Component
        </Heading>
      </Slide>

      <CodeSlide
        lang="jsx"
        code={require('../../assets/react-in-isolation/jsx-hello-world.example')}
        ranges={[
          {
            loc: [2, 5],
            title: 'Functional Component',
            note: 'the entire component is just a function call'
          }
        ]}
      />

      <Slide>
        <Heading size={2} fit>
Container Component
        </Heading>

        <List>
          <Appear>
            <ListItem>
State
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
Lifecycle Hooks
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
Instance Methods
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide transition={['zoom']}>
        <Heading size={1} fit>
State
        </Heading>

        <List>
          <Appear>
            <ListItem>
Application
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
Component
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={2} fit>
Controlled Input
        </Heading>
      </Slide>

      <CodeSlide
        lang="jsx"
        code={require('../../assets/react-in-isolation/controlled-input-stories.example')}
        ranges={[
          {
            loc: [9, 12],
            title: 'Controlled Input',
            note: 'when `value` is set, only React can change the value'
          },
          {
            loc: [12, 15],
            title: 'Controlled Input',
            note: 'when `value` is set, only React can change the value'
          },
          {
            loc: [6, 9],
            title: 'Controlled Input',
            note: 'when `value` is not set, React is not controlling the state of the input'
          }
        ]}
      />

      <Slide>
        <Link href="https://travi.github.io/react-in-isolation/?selectedKind=Inputs" target="_blank">
          <Heading size={2}>
Demo
          </Heading>
        </Link>
      </Slide>

      <CodeSlide
        lang="jsx"
        code={require('../../assets/react-in-isolation/controlled-input.example')}
        ranges={[
          {
            loc: [2, 3],
            title: 'Container Component',
            note: 'an instance needs to be created to maintain state'
          },
          {
            loc: [11, 20],
            title: 'Container Component',
            note: 'the `render` function serves the same purpose as a functional component, but has privileged ' +
            'access to instance properties'
          },
          {
            loc: [15, 16],
            title: 'Container Component',
            note: 'the `value` is controlled using state'
          },
          {
            loc: [3, 4],
            title: 'Container Component',
            note: 'state of `value` is initialized to an empty string. this could be initialized to a prop value'
          },
          {
            loc: [5, 10],
            title: 'Container Component',
            note: 'the handler passed as `onChange` to the DOM element updates the internal component state'
          },
          {
            loc: [16, 17],
            title: 'Container Component',
            note: 'the change-handler is passed to `onChange`'
          }
        ]}
      />

      <Slide>
        <Link href="https://travi.github.io/react-in-isolation/?selectedKind=Inputs" target="_blank">
          <Heading size={2}>
Demo
          </Heading>
        </Link>
      </Slide>

      <Slide transition={['zoom']}>
        <Heading size={1} fit>
Next Steps
        </Heading>

        <List>
          <Appear>
            <ListItem>
              Testing

              <List>
                <Appear>
                  <ListItem>
                    React&apos;s simplicity makes&nbsp;
                    <Link
                      href="https://github.com/travi/react-in-isolation/tree/master/test/unit"
                      target="_blank"
                      textColor="#888"
                    >
                      unit testing
                    </Link>
                    &nbsp;straight forward
                  </ListItem>
                </Appear>
              </List>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <Link
                href="https://storybook.js.org/addons/addon-gallery/"
                target="_blank"
                textColor="#888"
              >
                Storybook Plugins
              </Link>

              <List>
                <Appear>
                  <ListItem>
                    <Link
                      href="https://github.com/storybooks/storybook/tree/master/addons/knobs"
                      target="_blank"
                      textColor="#888"
                    >
                      Knobs
                    </Link>
                    <Link
                      href="https://www.youtube.com/watch?v=kopW6vzs9dg&feature=youtu.be"
                      target="_blank"
                      textColor="#888"
                    >
                      Demo Video
                    </Link>
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem>
                    <Link href="https://github.com/gvaldambrini/storybook-router" target="_blank" textColor="#888">
                      Storybook Router
                    </Link>
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem>
                    <Link
                      href="https://github.com/mthuret/storybook-addon-specifications"
                      target="_blank"
                      textColor="#888"
                    >
                      Specifications Addon
                    </Link>
                  </ListItem>
                </Appear>
              </List>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <Link href="https://github.com/facebookincubator/create-react-app" target="_blank" textColor="#888">
                Create React App
              </Link>
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide transition={['zoom']}>
        <Heading size={1} fit>
Matt Travi
        </Heading>

        <Layout>
          <Fit style={{paddingRight: 30}}>
            <Image
              style={{border: '10px solid #e5e5e5'}}
              src="https://secure.gravatar.com/avatar/552ffda146c8a19730e4e9a27dafb749?size=250"
            />
          </Fit>
          <Fill>
            <List>
              <ListItem>
                <Link textColor="#888" target="_blank" href="https://matt.travi.org">
matt.travi.org
                </Link>
              </ListItem>
              <ListItem>
                <Link textColor="#888" target="_blank" href="https://twitter.com/mtravi">
twitter.com/mtravi
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  textColor="#888"
                  target="_blank"
                  href="https://github.com/travi/react-in-isolation/tree/dsmjs-oct-2017"
                >
                  github.com/travi/react-in-isolation
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  textColor="#888"
                  target="_blank"
                  href="https://presentations.travi.org/react-in-isolation-dsmjs-oct-2017"
                >
                  presentations.travi.org/react-in-isolation-dsmjs-oct-2017
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
