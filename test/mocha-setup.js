import jsdom from 'jsdom';

const importAsString = module => {
  module.exports = '';    // eslint-disable-line no-param-reassign

  return module;
};

require.extensions['.css'] = () => undefined;
require.extensions['.jpg'] = importAsString;
require.extensions['.png'] = importAsString;
require.extensions['.svg'] = importAsString;

console.error = message => { throw new Error(message); };   // eslint-disable-line no-console

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>', {url: 'http://localhost'});
global.window = document.defaultView;
Object.keys(document.defaultView).forEach(property => {
  if ('undefined' === typeof global[property]) {
    global[property] = document.defaultView[property];
  }
});
global.window.matchMedia = () => ({matches: false});

Object.defineProperties(window.HTMLElement.prototype, {
  offsetLeft: {
    get() {
      return parseFloat(window.getComputedStyle(this).marginLeft) || 0;
    }
  },
  offsetTop: {
    get() {
      return parseFloat(window.getComputedStyle(this).marginTop) || 0;
    }
  },
  offsetHeight: {
    get() {
      return parseFloat(window.getComputedStyle(this).height) || 0;
    }
  },
  offsetWidth: {
    get() {
      return 100;
    }
  }
});


global.navigator = {
  userAgent: 'node.js'
};
