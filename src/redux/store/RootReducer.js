import { combineReducers } from 'redux';
import sessionReducer from '../reducer/sessionReducer';

// The use of combine reducer is to combine multiple reducers together.
export default combineReducers({
  sessionReducer
});