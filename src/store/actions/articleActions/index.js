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
  LOAD_PROGRESS,
  SUBMISSION_FAILED,
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
export const updateArticle = article => ({ article, type: EDIT_ARTICLE });
export const deleteArticle = article => ({ article, type: DELETE_ARTICLE });
export const onSubmission = () => ({ type: LOAD_PROGRESS });
export const submissionFailed = () => ({ type: SUBMISSION_FAILED });

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

export const getOneArticle = id => (dispatch) => {
  const url = `${baseURL}${'/articles/'}${id}/`;
  return axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(({ data }) => dispatch(getArticle(data.article)))
    .catch(error => dispatch(getArticalsError(error)));
};

export const newArticle = article => (dispatch) => {
  const url = `${baseURL}${'/articles/'}`;
  return axios.post(url, article, axiosConfig)
    .then((response) => {
      dispatch(createArticle(article));
      window.location = `/article/${response.data.article.id}`;
    });
};

export const editArticle = article => (dispatch) => {
  dispatch(onSubmission());
  const url = `${baseURL}${'/articles/'}${article.id}/`;
  return axios.put(url, article, axiosConfig)
    .then((response) => {
      dispatch(updateArticle(response.data.article));
    })
    .catch(() => {
      dispatch(submissionFailed());
    });
};

// export collection object
const articleActions = {
  getArticles,
  getAllArticles,
  getOneArticle,
  createArticle,
  updateArticle,
  deleteArticle,
};

export default articleActions;
