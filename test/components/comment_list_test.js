import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';
import CommentBox from '../../src/components/comment_box';
import App from '../../src/components/app';

describe('CommentList', () => {
  let component;
  beforeEach( () => {
    component = renderComponent(CommentList);
  });

  describe('tests by Stephen', () => {
    let sg_component;
    beforeEach( () => {
      const props = {  comments: [ 'New Comment', 'Other New Comment'] };
      sg_component = renderComponent(CommentList, null, props);
    });
    it('shows an LI for each comment', () => {
      expect(sg_component.find('li').length).to.equal(2);
    });
    it('shows each comment that is provided', () => {
      expect(sg_component).to.contain('New Comment');
      expect(sg_component).to.contain('Other New Comment');
    });
  });
  it('has a comment list with proper class', () => {
    expect(component).to.have.class('comment-list');
  });

  it('has a list header with proper class', () => {
    expect(component.find('ul')).to.have.class('comment-list-header');
  });

  it('has no list elements initially', () => {
    expect(component.find('li')).to.not.exist;
  });

});
