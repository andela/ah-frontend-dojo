import { toast } from 'react-toastify';
import axios from '../../../utils/mainAxios';
import {
  RATE_AVERAGE_SUCCESS,
  RATE_AVERAGE_ERROR,
  RATE_ARTICLE_SUCCESS,
  RATE_ARTICLE_ERROR,
}
  from '../types';

// action dispatcher for success on getting average
export const getRatingAverage = data => ({
  type: RATE_AVERAGE_SUCCESS,
  data,
});

// action dispatcher for error on getting average
export const getRatingAverageError = error => ({
  type: RATE_AVERAGE_ERROR,
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
export const starRatingRequest = (ratingData, slug) => dispatch => axios
  .post(`/articles/${slug}/article-rating/`, ratingData)
  .then((response) => {
    if (response.status === 200) {
      toast.success('Thank you for you rating');
      return dispatch(rateArticleSuccess(response.data));
    }
    toast.error('Sorry, you were unable to rate this article');
    return dispatch(rateArticleError(response.data.message));
  })
  .catch(error => error.response);

/**
* action creator function for getting rating average
* @param {string} slug
*/
export const getArticleRatingAvarege = slug => dispatch => axios
  .get(`/articles/${slug}/article-rating/average/`)
  .then(response => dispatch(getRatingAverage(response.data)))
  .catch(error => dispatch(getRatingAverageError(error)));
