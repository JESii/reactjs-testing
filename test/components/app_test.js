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
    expect(component).to.contain('My comment application');
    expect(component).to.contain('Comment Box');
    expect(component).to.contain('Comment List');
  });

  it('contains the CommentBox componet', () => {
    // Following does not work
    // expect(component.find('CommentBox')).to.exist;
    // expect(component).to.have.class("CommentBox");
    // expect(component.class).to.equal('CommentBox');
    // expect(component instanceof CommentBox).to.be.true
    expect(component.find('.comment-box')).to.exist;
  });

  it('contains the CommentList component', () => {
    expect(component.find('.comment-list')).to.exist;
  });

  describe('with dynamic list elements', () => {
    // let cbox;
    // let app;
    let textarea;
    let button;
    beforeEach( () => {
      // app = renderComponent(App);
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
      // expect(component.find('li')).to.have.value('a sample comment');
      // So really... what is the difference between 'contain' and 'have.value'???
    });
  });
});
