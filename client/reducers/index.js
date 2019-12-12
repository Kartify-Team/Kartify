import { combineReducers } from 'redux';
import reducerExample from './reducerExample';
import questionsReducer from './questions';
import productReducer from './product';

export default combineReducers({
  reducerExample,
  questionsReducer,
  product: productReducer
});
