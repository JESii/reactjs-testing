import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('commentBox', () => {
  let component;
  beforeEach( () => {
    component = renderComponent(CommentBox);
  });

  it('has a title', () => {
    expect(component).to.contain('title');
  });

  it('has a textfield', () => {
    expect(component).to.contain('textfield');
  });

  it('has an add comment button', () => {
    expect(component).to.contain('button');
  });

});

