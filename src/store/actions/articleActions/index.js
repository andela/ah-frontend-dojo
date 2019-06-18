import axios from 'axios';
import { baseURL, axiosConfig } from 'utils';
import {
  GET_ARTICLES,
  GET_ARTICLES_START,
  GET_ARTICLES_ERROR,
  GET_ARTICLE,
  MY_ARTICLES,
  NEW_ARTICLE,
  EDIT_ARTICLE,
  DELETE_ARTICLE,
} from 'store/actions/articleTypes';

// action creators

/**
 * Action creator to indicate article fetching start.
 * @return {action} - Action to indicate fetching start
 */
export const getArticlesStart = () => ({ type: GET_ARTICLES_START });

/**
 * Action creator to indicate article fetching start.
 * @param {articles}
 * @return {action} - Action to add articles to the store
 */
export const getArticles = articles => ({ articles, type: GET_ARTICLES });

/**
 * Action creator to indicate article fetching start.
 * @param {error}
 * @return {action} - Action to addthe error to the store
 */
export const getArticalsError = error => ({ error, type: GET_ARTICLES_ERROR });
export const getArticle = article => ({ article, type: GET_ARTICLE });
export const myArticles = articles => ({ articles, type: MY_ARTICLES });
export const createArticle = article => ({ article, type: NEW_ARTICLE });
export const editArticle = article => ({ article, type: EDIT_ARTICLE });
export const deleteArticle = article => ({ article, type: DELETE_ARTICLE });

// thunks

/**
 * Thunk to fetch articles.
 * @return {action} - Action to indicate fetching start
 */
export const getAllArticles = () => (dispatch) => {
  const url = `${baseURL}${'/articles/'}`;

  dispatch(getArticlesStart());
  return axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(({ data }) => dispatch(getArticles(data.results.articles)))
    .catch(error => dispatch(getArticalsError(error)));
};

export const getAllMyAricles = () => (dispatch) => {
  const url = `${baseURL}${'/articles/'}`;

  // fetch all logged in user's articles
  axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(({ data }) => dispatch(myArticles(data.results.articles)))
    .catch(error => dispatch(getArticalsError(error)));
};

export const getOneArticle = id => (dispatch) => {
  const url = `${baseURL}${'/articles/'}${id}/`;
  axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(({ data }) => dispatch(getArticle(data.article)))
    .catch(error => dispatch(getArticalsError(error)));
};

export const newArticle = article => (dispatch) => {
  const url = `${baseURL}${'/articles/'}`;
  axios.post(url, article, axiosConfig)
    .then((response) => {
      dispatch(createArticle(response.data.article));
    });
};

// export collection object
const articleActions = {
  getArticles,
  getAllArticles,
  getOneArticle,
  getAllMyAricles,
  createArticle,
  editArticle,
  deleteArticle,
};

export default articleActions;
