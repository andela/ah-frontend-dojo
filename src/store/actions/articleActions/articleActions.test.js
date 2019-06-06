import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import { getAllArticles, newArticle } from 'store/actions/articleActions';
import data from 'store/actions/__mocks__';
import { GET_ARTICLES, GET_ARTICLES_START, NEW_ARTICLE } from '../articleTypes';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

const mockData = { results: { articles: [] } };

it('Should retrieve all articles', async () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: mockData }));

  const expectedActions = [
    { type: GET_ARTICLES_START },
    { type: GET_ARTICLES, articles: [] },
  ];

  await store.dispatch(getAllArticles());

  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
});

it('Should return an error', async () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({ results: mockData }));

  const expectedActionType = GET_ARTICLES_START;

  await store.dispatch(getAllArticles());

  expect(store.getActions()[0].type).toEqual(expectedActionType);
  expect(mockAxios.get).toHaveBeenCalledTimes(2);
});

describe('test article', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  const moxiosStore = mockStore({});
  // it('should create an article', () => {
  //   moxios.wait(() => {
  //     const request = moxios.requests.mostRecent();
  //     request.respondWith({
  //       status: 201,
  //       response: data.articleData.article,
  //     });
  //   });
  //   const newArticleData = {
  //     article: {
  //       title: 'How to write unit tests with TDD',
  //       body: 'Writing Unit test with TDD',
  //       description: 'This article is about how to write unittests using pytest',
  //       tagList: [],
  //     }
  //   };
  //   const expectedActions = [
  //     {
  //       type: NEW_ARTICLE,
  //       article: data.articleData.article,
  //     },
  //   ];
  //   return moxiosStore.dispatch(newArticle(newArticleData))
  //     .then(() => {
  //       expect(moxiosStore.getActions()).toEqual(expectedActions);
  //     });
  // });
});
