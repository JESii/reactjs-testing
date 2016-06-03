import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import commentReducer from '../../src/reducers/comments';

describe('Comments Reducer', () => {
  it('handles actions with unknown type', () => {
    expect(commentReducer(undefined, {})).to.be.instanceof(Array);
    expect(commentReducer(undefined, {})).to.eql([]);
  });
  it('SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'test comment' };
    expect(commentReducer([], action)).to.eql(['test comment']);
  });
});
