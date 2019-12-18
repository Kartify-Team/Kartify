import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// import { compose } from 'redux';
// import { createLogger } from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
// const logger = createLogger({
//   /* https://github.com/evgenyrodionov/redux-logger */
//   collapsed: true,
//   diff: true
// });
let store = createStore(rootReducer, {},
  applyMiddleware(thunk)
  // composeWithDevTools(
  //   applyMiddleware(thunk, logger)
  // )
);

export default store;
