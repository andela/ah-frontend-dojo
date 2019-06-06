// third party libraries
import { combineReducers } from 'redux';
import registerReducer from 'store/reducers/registerReducer';
import articles from './reducers/articles';
import article from './reducers/article';

const rootReducers = combineReducers({
  registerReducer,
  articles,
  article,
});

export default rootReducers;
