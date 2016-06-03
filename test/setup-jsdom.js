// From http://stackoverflow.com/questions/26867535/calling-setstate-in-jsdom-based-tests-causing-cannot-render-markup-in-a-worker
// by leplatrem
// + I added the jQuery import
import _$ from 'jquery';
var jsdom = require("jsdom");

// Setup the jsdom environment
// @see https://github.com/facebook/react/issues/5046
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
