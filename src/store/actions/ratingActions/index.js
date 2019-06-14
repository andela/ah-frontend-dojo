import { toast } from 'react-toastify';
import axios from '../../../utils/mainAxios';
import {
  GET_AVERAGE_RATE_SUCCESS,
  GET_AVERAGE_RATE_ERROR,
  RATE_ARTICLE_SUCCESS,
  RATE_ARTICLE_ERROR,
}
  from '../types';

// action dispatcher for success on getting average
export const getRatingAverage = data => ({
  type: GET_AVERAGE_RATE_SUCCESS,
  data,
});

// action dispatcher for error on getting average
export const getRatingAverageError = error => ({
  type: GET_AVERAGE_RATE_ERROR,
  error,
});

// action dispatcher for success on rating article
export const rateArticleSuccess = data => ({
  type: RATE_ARTICLE_SUCCESS,
  data,
});

// action dispatcher for error on rating article
export const rateArticleError = error => ({
  type: RATE_ARTICLE_ERROR,
  error,
});

/**
* action creator for rating artices
* @param {string} ratingData
* @param {string}  slug
*/
export const starRatingActionCreator = (ratingData, slug) => dispatch => axios
  .post(`/articles/${slug}/article-rating/${ratingData}/`)
  .then((response) => {
    if (response.status === 201) {
      toast.success(response.data.message);
      return dispatch(rateArticleSuccess(response.data.message));
    }
    toast.error('Sorry, you were unable to rate this article');
    return dispatch(rateArticleError(response.data.message));
  })
  .catch(error => error.response);

/**
* action creator function for getting rating average
* @param {string} slug
*/
export const getAverageRating = slug => dispatch => axios
  .get(`/articles/${slug}/article-rating/average/`)
  .then(response => dispatch(getRatingAverage(response.data)))
  .catch(error => dispatch(getRatingAverageError(error)));
