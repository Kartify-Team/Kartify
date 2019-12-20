import { combineReducers } from 'redux'; //root reducer
import questionsReducer from './questions';
import otherItems from './otherItems.js';
import productReducer from './product';
import ratingsReducer from './ratings';
import themeReducer from './theme'

export default combineReducers({
  questions: questionsReducer,
  product: productReducer,
  reviews: ratingsReducer,
  otherItems,
  theme: themeReducer
});
