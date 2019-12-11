//root reducer

import { combineReducers } from 'redux';
import reducerExample from './reducerExample';
import questionsReducer from './questions';

export default combineReducers({
  reducerExample,
  questionsReducer
});

