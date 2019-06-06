import { NEW_ARTICLE } from '../actions/types';

const initialState = {
  articles: [],
  article: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_ARTICLE:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}
