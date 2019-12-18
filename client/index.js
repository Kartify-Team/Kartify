import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (<Provider store={store}>
  <Router>
    <Switch>
      <Route path="/products/:id">
        <AppContainer />
      </Route>
    </Switch>
  </Router>
</Provider>);

// console.log("env" + process.env.REACT_APP_IS_E2E_TEST)
// if (process.env.REACT_APP_IS_E2E_TEST) {
//   console.log("ready for e2e test")
//   const el = Enzyme.mount(<App />, { attachTo: document.getElementById('app') });
//   window.el = el;
// } else {
ReactDOM.render(<App />, document.getElementById('app'));
// }


// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <Switch>
//         <Route path="/products/:id">
//           <AppContainer />
//         </Route>
//       </Switch>
//     </Router>
//   </Provider>,
//   document.getElementById('app')
// );