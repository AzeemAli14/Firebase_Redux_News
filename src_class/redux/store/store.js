import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './RootReducer';

const configureStore = () => {
  const middleware = [thunk];
  return createStore(rootReducer, applyMiddleware(...middleware));
};

export default configureStore;