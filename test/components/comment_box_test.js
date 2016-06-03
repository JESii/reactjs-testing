import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('commentBox', () => {
  let component;
  beforeEach( () => {
    component = renderComponent(CommentBox);
  });

  it('has the correct class',() => {
    expect(component).to.have.class('comment-box');
  });
  it('has a title', () => {
    expect(component.find('h2')).to.exist;
  });

  it('has a textfield', () => {
    // expect(findRenderedDOMComponentWithTag(CommentBox, 'textfield')).to.be true;
    expect(component).to.exist;
    expect(component.find('textarea')).to.exist;
  });

  it('has an add comment button', () => {
    expect(component.find('button')).to.exist;
    expect(component.find('button').text()).to.contain('Submit Comment');
  });

  describe('entering text', () => {
    let textarea;
    let button;
    beforeEach( () => {
      textarea = component.find('textarea');
      textarea.simulate('change', 'sample comment');
    });
    it('it shows the text in the text box', () => {
      expect(textarea).to.have.value('sample comment');
    });
    it('it clears the text box on submit', () => {
      button = component.find('button');
      button.simulate('submit');
      expect(textarea).to.have.value('');
    });
  });
});
