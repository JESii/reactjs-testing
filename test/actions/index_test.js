import { expect } from '../test_helper';
// Why doesn't this throw an error when SAVE_COMMENT is not yet defined?
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions/index';

describe('actions',() => {
  describe('saveComment', () => {
    it('has the correct type', () => {
      expect(saveComment().type).to.equal(SAVE_COMMENT);
    });
    it('has the correct payload', () => {
      const action = saveComment('a test comment')
      expect(action.payload).to.equal('a test comment');
    });
  });
});
