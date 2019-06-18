import articleReducer from 'store/reducers/article';

import {
  GET_ARTICLE,
  NEW_ARTICLE,
  EDIT_ARTICLE,
  DELETE_ARTICLE,
} from '../../actions/articleTypes';

describe('article reducer testing', () => {
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
        article: {
          title: 'new article',
          description: 'new description',
          body: 'new article body',
          tagList: [],
        },
      })
    ).toEqual({
      article: {
        title: 'new article',
        description: 'new description',
        body: 'new article body',
        tagList: [],
      },
    });
  });

  it('should get an article', () => {
    expect(
      articleReducer({ article: {} }, {
        type: GET_ARTICLE,
        article: {
          title: 'new article',
          description: 'new description',
          body: 'new article body',
          tagList: [],
        },
      })
    ).toEqual({
      article: {
        title: 'new article',
        description: 'new description',
        body: 'new article body',
        tagList: [],
      },
    });
  });

  it('should edit an article', () => {
    expect(
      articleReducer({ article: {} }, {
        type: EDIT_ARTICLE,
        article: {
          title: 'new article',
          description: 'new description',
          body: 'new article body',
          tagList: [],
        },
      })
    ).toEqual({
      article: {
        title: 'new article',
        description: 'new description',
        body: 'new article body',
        tagList: [],
      },
    });
  });

  it('should edit an article', () => {
    expect(
      articleReducer({ article: {} }, {
        type: DELETE_ARTICLE,
        article: {
          title: 'new article',
          description: 'new description',
          body: 'new article body',
          tagList: [],
        },
      })
    ).toEqual({
      article: {
        title: 'new article',
        description: 'new description',
        body: 'new article body',
        tagList: [],
      },
    });
  });
});
