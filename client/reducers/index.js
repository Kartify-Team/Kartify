// Root Reducer
import { combineReducers } from 'redux';
import otherItems from './otherItems.js';
import questionsReducer from './questions';

export default combineReducers({
  questionsReducer,
  otherItems
});