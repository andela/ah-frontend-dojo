import {
  GET_ARTICLE,
  NEW_ARTICLE,
  EDIT_ARTICLE,
  DELETE_ARTICLE,
} from '../../actions/types';

const initialState = {
  articles: [],
  article: {},
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
        article: action.article,
      };

    case DELETE_ARTICLE:
      return {
        ...state,
        article: action.article,
      };
    default:
      return state;
  }
};

export default articleReducer;
