import
{
  RATE_AVERAGE_SUCCESS,
  RATE_AVERAGE_ERROR,
  RATE_ARTICLE_SUCCESS,
  RATE_ARTICLE_ERROR,
}
  from '../../actions/types';

const initialState = {
  rating: 0,
  error: null,
};

const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case RATE_AVERAGE_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        rating: action.value.rating,
      });
    case RATE_AVERAGE_ERROR:
      return Object.assign({}, state, {
        ...state,
        rating: 0,
      });
    case RATE_ARTICLE_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        rating: action.value.rating,
      });
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
