import
{
  GET_AVERAGE_RATE_SUCCESS,
  GET_AVERAGE_RATE_ERROR,
  RATE_ARTICLE_SUCCESS,
  RATE_ARTICLE_ERROR,
}
  from 'store/actions/types';

const initialState = {
  rating: 0,
  error: null,
};

const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AVERAGE_RATE_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        rating: action.rating,
      });
    case GET_AVERAGE_RATE_ERROR:
      return Object.assign({}, state, {
        ...state,
        rating: 0,
      });
    case RATE_ARTICLE_SUCCESS:
    case RATE_ARTICLE_ERROR:
      return Object.assign({}, state, {
        ...state,
        rating: 0,
      });
    default:
      return state;
  }
};

export default ratingReducer;
