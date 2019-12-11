//root reducer
import { combineReducers } from 'redux';
import questionsReducer from './questions';
import otherItems from './otherItems.js';

export default combineReducers({
  questionsReducer,
  otherItems
});