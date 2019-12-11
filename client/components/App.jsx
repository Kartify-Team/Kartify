import React, { Component } from 'react';
import OtherItems from './OtherItems/index.jsx';
import OverviewContainer from '../containers/Overview';
import ReviewsContainer from '../containers/Reviews';
import QuestionsContainer from '../containers/Questions';

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
        <ReviewsContainer />
        <QuestionsContainer />
      </div>
    );
  }
}
