import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import OverviewContainer from '../containers/Overview';
import OtherItemsContainer from '../containers/OtherItems';
import ReviewsContainer from '../containers/Reviews';
import QuestionsContainer from '../containers/Questions';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Route path="/">
          <Redirect to={'/products/1'} />
        </Route>

        <Switch>
          <Route path="/products/:id">
            <div id="components-container">
              <OverviewContainer />
              <OtherItemsContainer />
              <ReviewsContainer />
              <QuestionsContainer />
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}
