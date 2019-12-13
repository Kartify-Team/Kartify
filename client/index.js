import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/products/:id">
          <AppContainer />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app')
);