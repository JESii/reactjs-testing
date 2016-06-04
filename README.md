# reactjs-testing

From [Redux class](https://www.udemy.com/react-redux/)

###Cross-component testing with ReactJS

Starting with the ReactSimpleStarter provided by Stephen Grider, you can make some adjustments
to the TDD setup so that you can write tests that utilize more than one component.

With the basic setup (using mocha and chai) if you try to write a test such as this:

**test/components/app\_test.js**
```javascript
import { renderComponent , expect } from '../test\_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;
  beforeEach( () => {
    component = renderComponent(App);
  });
  describe('with dynamic list elements', () => {
    let textarea;
    let button;
    beforeEach( () => {
      textarea = component.find('textarea');
      textarea.simulate('change', 'a sample comment');
      button = component.find('button');
      button.simulate('submit');
    });
    it('displays the expected controls', () => {
      console.log('textarea: ', textarea, '\n', 'button: ', button);
      expect(textarea).to.exist;
      expect(button).to.exist;
    });
    it('has an li for comments', () => {
      expect(component.find('li')).to.exist;
    });
    it('displays comment text',() => {
      expect(component.find('li')).to.contain('a sample comment');
    });
  });
});
```

Your tests will fail with "Cannot render markup in worker thread"

I found [this post](
http://stackoverflow.com/questions/26867535/calling-setstate-in-jsdom-based-tests-causing-cannot-render-markup-in-a-worker)
which addressed the issue. [See also this React issue.](https://github.com/facebook/react/issues/5046#issuecomment-146222515) What's happening is that when React is loaded, there is no DOM available (jsdom hasn't been
loaded yet) and so -- with no DOM -- React can't run tests which use setState. As stated in the 
[React documentation](https://facebook.github.io/react/docs/test-utils.html) the document,
window, and document.createElement must be available globally. 

The post offered the following in the 2nd answer which targeted testing using mocha and chai, and looked promising.

```javascript
var jsdom = require("jsdom");

// Setup the jsdom environment
// @see https://github.com/facebook/react/issues/5046
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
```

Unfortunately, it didn't work out of the box: jsdom requires jQuery.  But the solution was simple: just add the following
at the top of the setup-jsdom.js file and now those 'end-to-end' tests work just fine.

**test/setup\_jsdom.rc**
```
import \_$ from 'jquery';
var jsdom = require("jsdom");

// Setup the jsdom environment
// @see https://github.com/facebook/react/issues/5046
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
```
