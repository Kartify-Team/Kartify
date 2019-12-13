import React, { useState, useEffect } from 'react';
import StarStats from './StarStats';
import SizeRating from './SizeRating';
import ComfortRating from './ComfortRating';
import { getTotalRatings } from '../../utils';

const RatingBreakdown = ({ productId, reviews }) => {
  let [totalRatings, setTotalRatings] = useState(0);
  useEffect(() => {
    if (reviews !== null && reviews !== undefined) {
      setTotalRatings(getTotalRatings(reviews));
    }
  }, []);

  if (reviews === null || reviews === undefined) {
    return null;
  } else {
    return (
      <div id="review-stats-container">
        <StarStats rating={reviews === null ? null : reviews.average} />
        <SizeRating />
        <ComfortRating />
      </div>
    );
  }
};

export default RatingBreakdown;
