// third party libraries
import { combineReducers } from 'redux';
import registerReducer from 'store/reducers/registerReducer';
import loginReducer from 'store/reducers/loginReducer';
import confirmEmailReducer from 'store/reducers/confirmEmailReducer';
import passwordResetReducer from 'store/reducers/passwordResetReducer';
import facebookReducer from './reducers/socialReducer/Facebook';
import googleReducer from './reducers/socialReducer/Google';
import profile from './reducers/profileReducer';
import articlesReducer from './reducers/articlesReducer';
import articleReducer from './reducers/article';


const rootReducers = combineReducers({
  registerReducer,
  loginReducer,
  confirmEmailReducer,
  passwordResetReducer,
  facebookReducer,
  googleReducer,
  profile,
  articlesReducer,
  articleReducer,
});

export default rootReducers;
