import {
  GET_ARTICLE,
  NEW_ARTICLE,
  EDIT_ARTICLE,
  DELETE_ARTICLE,
  LOAD_PROGRESS,
  SUBMISSION_FAILED,
} from 'store/actions/articleTypes';

const initialState = {
  article: {},
  articles: [],
};
const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLE:
      return {
        ...state,
        article: action.article,
      };

    case NEW_ARTICLE:
      return {
        ...state,
        article: action.article,
      };

    case EDIT_ARTICLE:
      return {
        ...state,
        editProgress: false,
        article: action.article,
      };

    case DELETE_ARTICLE:
      return {
        ...state,
        article: action.article,
      };

    case LOAD_PROGRESS:
      return {
        ...state,
        editProgress: true,
      };

    case SUBMISSION_FAILED:
      return {
        ...state,
        editProgress: false,
      };
    default:
      return state;
  }
};

export default articleReducer;
