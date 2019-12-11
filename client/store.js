
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// import { composeWithDevTools } from 'redux-devtools-extension';

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;