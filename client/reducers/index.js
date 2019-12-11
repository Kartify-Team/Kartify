//root reducer

import { combineReducers } from 'redux';
import reducerExample from './reducerExample';
import otherItems from './otherItems.js';

export default combineReducers({
  otherItems
});

