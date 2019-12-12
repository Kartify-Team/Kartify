import React, { Component } from 'react';
import ReviewList from './ReviewList';
import ReviewStats from './ReviewStats';

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
        <div id="reviews-container">
          <ReviewStats productId={this.props.product.id} />
          <ReviewList />
        </div>
      );
    }
  }
}
