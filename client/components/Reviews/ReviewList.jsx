import React from 'react';
import ReviewItem from './ReviewItem';

const ReviewList = ({ reviews }) => (
  <div id="review-list-container">
    {reviews.map(review => ReviewItem(review))}
  </div>
);

export default ReviewList;
