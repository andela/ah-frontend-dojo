// third party libraries
import { toast } from 'react-toastify';

// import axios instance
import axios from 'utils/mainAxios';

// user constants
import {
  FOLLOW_AUTHOR_ERROR,
  FOLLOW_AUTHOR_SUCCESS,
  UNFOLLOW_AUTHOR_FAILURE,
  UNFOLLOW_AUTHOR_SUCCESS,
  GET_FOLLOWERS_ERROR,
  GET_FOLLOWERS_SUCCESS,
  GET_FOLLOWING_ERROR,
  GET_FOLLOWING_SUCCESS,
} from 'store/actions/followTypes';

/**
* follow author action function on success
* @param {string} response
*/
export const followAuthorSuccess = response => ({
  type: FOLLOW_AUTHOR_SUCCESS,
  response,
});

/**
  * follow author action function on error
  * @param {string} error
  */
export const followAuthorError = error => ({
  type: FOLLOW_AUTHOR_ERROR,
  error,
});

/**
* follow author action function on success
* @param {string} response
*/
export const getFollowersSuccess = response => ({
  type: GET_FOLLOWERS_SUCCESS,
  response,
});

/**
    * get followers action function on error
    * @param {string} error
    */
export const getFollowersError = error => ({
  type: GET_FOLLOWERS_ERROR,
  error,
});

/**
* get followers action function on success
* @param {string} response
*/
export const getFollowingSuccess = response => ({
  type: GET_FOLLOWING_SUCCESS,
  response,
});

/**
    * follow author action function on error
    * @param {string} error
    */
export const getFollowingError = error => ({
  type: GET_FOLLOWING_ERROR,
  error,
});

/**
* action creator function for following authors
* username as a parameter and dispatch as a function
* @param {string} username
*/
export const fellowAndUnfollowAuthorActionCreator = username => dispatch => axios
  .post(`authors/${username}/follow/`)
  .then(response => dispatch(followAuthorSuccess(response.data.profile)))
  .catch(error => dispatch(followAuthorError(error)));


/**
* action creator function for getting author's followers
* username as a parameter and dispatch as a function
* @param {string} username
*/
export const getFollowersActionCreator = () => dispatch => axios
  .get('authors/followers/')
  .then((response) => {
    dispatch(getFollowersSuccess(response.data));
  })
  .catch(error => dispatch(getFollowersError(error)));

/**
* action creator function for getting author's followers
* username as a parameter and dispatch as a function
* @param {string} username
*/
export const getFollowingActionCreator = () => dispatch => axios
  .get('authors/following/')
  .then((response) => {
    dispatch(getFollowingSuccess(response.data));
  })
  .catch(error => dispatch(getFollowingError(error)));
