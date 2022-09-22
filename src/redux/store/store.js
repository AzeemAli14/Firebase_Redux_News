import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './RootReducer';

const configureStore = () => {
  const middleware = [thunk]; // The use of middleware is to handle api calls and async functions calls being used in redux.
  return createStore(rootReducer, applyMiddleware(...middleware));
};

export default configureStore;