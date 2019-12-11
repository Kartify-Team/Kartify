import React from 'react';
import StarStats from './StarStats';
import SizeRating from './SizeRating';
import ComfortRating from './ComfortRating';

const ReviewStats = props => (
  <div id="review-stats-container">
    <StarStats />
    <SizeRating />
    <ComfortRating />
  </div>
);

export default ReviewStats;
