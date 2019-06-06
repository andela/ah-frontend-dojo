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

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLE:
      return {
        ...state,
        article: action.payload,
      };

    case NEW_ARTICLE:
      return {
        ...state,
        article: action.payload,
      };

    case EDIT_ARTICLE:
      return {
        ...state,
        article: action.payload,
      };

    case DELETE_ARTICLE:
      return {
        ...state,
        article: action.payload,
      };
    default:
      return state;
  }
}
