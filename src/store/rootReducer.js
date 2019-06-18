// third party libraries
import { combineReducers } from 'redux';
import registerReducer from 'store/reducers/registerReducer';
import loginReducer from 'store/reducers/loginReducer';
import confirmEmailReducer from 'store/reducers/confirmEmailReducer';
import passwordResetReducer from 'store/reducers/passwordResetReducer';
import articlesReducer from 'store/reducers/articlesReducer';
import articleReducer from 'store/reducers/article';


const rootReducers = combineReducers({
  registerReducer,
  loginReducer,
  confirmEmailReducer,
  passwordResetReducer,
  articlesReducer,
  articleReducer,
});

export default rootReducers;
