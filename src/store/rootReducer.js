// third party libraries
import { combineReducers } from 'redux';
import registerReducer from 'store/reducers/registerReducer';
import loginReducer from 'store/reducers/loginReducer';
import articles from './reducers/articles';
import rating from './reducers/ratingReducer';


const rootReducers = combineReducers({
  registerReducer,
  loginReducer,
  articles,
  rating,
});

export default rootReducers;
