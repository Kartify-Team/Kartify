import React, { Component } from 'react';
import OtherItems from './OtherItems/index.jsx';
import OverviewContainer from '../containers/Overview';
import ReviewsContainer from '../containers/Reviews';
import Questions from './Questions';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <OverviewContainer />
        <OtherItems />
        <Questions />
        <ReviewsContainer />
      </div>
    );
  }
}
