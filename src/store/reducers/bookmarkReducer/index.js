// import bookmark actions
import {
  TOGGLE_BOOKMARK,
  BOOKMARK_ERROR,
  SET_INITIAL_BOOKMARK_STATUS,
} from 'store/actions/bookmarkTypes';

const initialState = {
  isBookmarked: false,
  isBookmarkError: false,
  bookmarkError: '',
};
/**
  * reducer for toggling a bookmark
  * @param {object}
  * @return {object}
  */
const bookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIAL_BOOKMARK_STATUS:
      return {
        ...state,
        isBookmarkError: false,
        isBookmarked: action.isBookmarked,
      };

    case TOGGLE_BOOKMARK:
      return {
        ...state,
        isBookmarkError: false,
        isBookmarked: !state.isBookmarked,
      };

    case BOOKMARK_ERROR:
      return {
        ...state,
        isBookmarkError: true,
        bookmarkError: action.error,
      };

    default:
      return state;
  }
};

export default bookmarkReducer;
