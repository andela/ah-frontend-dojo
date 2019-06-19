// import bookmark actions
import {
  TOGGLE_BOOKMARK,
  BOOKMARK_ERROR,
  SET_INITIAL_BOOKMARK_STATUS,
} from 'store/actions/bookmarkTypes';

import bookmarkReducer from 'store/reducers/bookmarkReducer';

describe('Bookmark Reducer', () => {
  it('should return the initial state', () => {
    const newState = bookmarkReducer(undefined, {});
    expect(newState.isBookmarked).toEqual(false);
    expect(newState.isBookmarkError).toEqual(false);
  });

  it('should bookmark the article', () => {
    const newState = bookmarkReducer(undefined, { type: TOGGLE_BOOKMARK });
    expect(newState.isBookmarked).toEqual(true);
  });

  it('should add bookmark errors to the store', () => {
    const newState = bookmarkReducer(undefined, { type: BOOKMARK_ERROR, error: ['Invalid token', 'Invalid slug'] });
    expect(newState.isBookmarkError).toEqual(true);
    expect(newState.bookmarkError.length).toEqual(2);
  });

  it('should set the initialbookmark state to the store', () => {
    const newState = bookmarkReducer(
      undefined, { type: SET_INITIAL_BOOKMARK_STATUS, isBookmarked: true }
    );
    expect(newState.isBookmarked).toEqual(true);
    expect(newState.isBookmarkError).toEqual(false);
    expect(newState.bookmarkError.length).toEqual(0);
  });
});
