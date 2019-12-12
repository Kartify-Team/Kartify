import React, { Component } from 'react';
import ReviewList from './ReviewList';
import RatingBreakdown from './RatingBreakdown';

export default class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (!this.props.product) {
      return null;
    } else {
      return (
        <>
          <h3>Ratings & Reviews</h3>
          <div id="reviews-container">
            <RatingBreakdown productId={this.props.product.id} />
            <ReviewList />
          </div>
        </>
      );
    }
  }
}
