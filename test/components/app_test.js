import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach( () => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('has the expected content', () => {
    expect(component).to.contain('React simple starter');
  });

  describe('add a comment component', () => {

    it('has a comment header', () => {
      expect(component).to.contain('Add a comment');
    });

    it('has a comment input field', () => {
      expect(component).to.contain('Add Comment');
      console.log("this " + this);
      var txtfld = this.refs.addComment;
      txtfld.value = "this is a test";
      ReactTestUtils.Simulate.change(txtfld);
    });
  });
});
