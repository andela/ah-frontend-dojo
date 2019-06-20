// import action types
import {
  FOLLOW_AUTHOR_ERROR,
  FOLLOW_AUTHOR_SUCCESS,
  GET_FOLLOWERS_ERROR,
  GET_FOLLOWERS_SUCCESS,
  GET_FOLLOWING_ERROR,
  GET_FOLLOWING_SUCCESS,
} from 'store/actions/followTypes';

// initial state object
export const initialState = {
  followers: {},
  following: {},
  error: {},
};

/**
    * This is a switch function for our follow reducer.
    * @param {Object} - initialState*
    * @return {object} - action
    * @example
    *
    */

const followReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_AUTHOR_SUCCESS:
      return Object.assign({}, state, {
        follow: action.follow,
      });
    case FOLLOW_AUTHOR_ERROR:
    case GET_FOLLOWERS_SUCCESS:
      return {
        ...state,
        followers: action.response,
        error: '',
      };

    case GET_FOLLOWERS_ERROR:
    case GET_FOLLOWING_SUCCESS:
      return {
        ...state,
        following: action.response,
        error: '',
      };
    case GET_FOLLOWING_ERROR:
    default:
      return state;
  }
};

export default followReducer;
