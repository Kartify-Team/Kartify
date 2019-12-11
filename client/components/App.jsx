import React, { Component } from 'react';
import OverviewContainer from '../containers/Overview';
import OtherItemsContainer from "../containers/OtherItems";
import ReviewsContainer from '../containers/Reviews';
import QuestionsContainer from '../containers/Questions';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="components-container">
        <OverviewContainer />
        <OtherItemsContainer />
        <ReviewsContainer />
        <QuestionsContainer />
      </div>
    );
  }
}
