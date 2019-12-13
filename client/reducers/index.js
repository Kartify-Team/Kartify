import { combineReducers } from 'redux'; //root reducer
import questionsReducer from './questions';
import otherItems from './otherItems.js';
import productReducer from './product';
import ratingsReducer from './ratings';

export default combineReducers({
  questions: questionsReducer,
  product: productReducer,
  ratings: ratingsReducer,
  otherItems
});
