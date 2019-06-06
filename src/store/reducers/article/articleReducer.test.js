import articleReducer from 'store/reducers/article';

import {
  GET_ARTICLE,
  NEW_ARTICLE,
  EDIT_ARTICLE,
  LOAD_PROGRESS,
  SUBMISSION_FAILED,
  DELETE_ARTICLE,
} from '../../actions/articleTypes';

describe('article reducer testing', () => {
  const article = {
    title: 'new article',
    description: 'new description',
    body: 'new article body',
    tagList: [],
  };
  it('should return the initial state', () => {
    expect(articleReducer(undefined, {})).toEqual({
      articles: [],
      article: {},
    });
  });

  it('should create an article', () => {
    expect(
      articleReducer({ article: {} }, {
        type: NEW_ARTICLE,
        article,
      })
    ).toEqual({
      article,
    });
  });

  it('should get an article', () => {
    expect(
      articleReducer({ article: {} }, {
        type: GET_ARTICLE,
        article,
      })
    ).toEqual({
      article,
    });
  });


  it('should show load progress on edit', () => {
    expect(
      articleReducer({ article: {} }, {
        type: GET_ARTICLE,
        article,
      })
    ).toEqual({
      article,
    });
  });

  it('should edit an article', () => {
    expect(
      articleReducer({ article: {} }, {
        type: EDIT_ARTICLE,
        article,
      })
    ).toEqual({
      article,
      editProgress: false,
    });
  });

  it('should show load progress on article edit', () => {
    expect(
      articleReducer({ article }, {
        type: LOAD_PROGRESS,
      })
    ).toEqual({
      article,
      editProgress: true,
    });
  });

  it('should change load progess to false on edit failure', () => {
    expect(
      articleReducer({ }, {
        type: SUBMISSION_FAILED,
      })
    ).toEqual({
      editProgress: false,
    });
  });

  it('should delete an article', () => {
    expect(
      articleReducer({ article: {} }, {
        type: DELETE_ARTICLE,
        article,
      })
    ).toEqual({
      article,
    });
  });
});
