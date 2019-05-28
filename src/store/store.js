import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './rootReducer';

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension(),
);
const store = createStore(reducer, enhancers);

export default store;
