import React, { Component } from 'react';
import ReviewList from './ReviewList';
import ReviewStats from './ReviewStats';

export default class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="reviews-container">
        <ReviewStats />
        <ReviewList />
      </div>
    );
  }
}
