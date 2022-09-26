import { combineReducers } from 'redux';
import sessionReducer from '../reducer/sessionReducer';

export default combineReducers({
  sessionReducer
});

// Root Reducer is used to combine all the reducer that are being used in your redux and combine them in one reducer.