import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

let store = createStore(rootReducer, {}, applyMiddleware(thunk));

//// Dev tools cause tests to fail
// import {compose} from 'redux';
// compose(applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;
