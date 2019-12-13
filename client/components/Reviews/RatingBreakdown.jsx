import React, { useState, useEffect } from 'react';
import StarStats from './StarStats';
import SizeRating from './SizeRating';
import ComfortRating from './ComfortRating';
import { getTotalRatings } from '../../utils';

const RatingBreakdown = ({ productId, reviews }) => {
  let [totalRatings, setTotalRatings] = useState(0);
  useEffect(() => {
    if (reviews.ratings !== null && reviews.ratings !== undefined) {
      console.log(reviews.ratings, 'dfaf');
      setTotalRatings(getTotalRatings(reviews.ratings));
    }
  }, []);

  if (reviews.ratings === null || reviews.ratings === undefined) {
    return null;
  } else {
    return (
      <div id="review-stats-container">
        <StarStats
          rating={reviews.ratings === null ? null : reviews.ratings.average}
        />
        <SizeRating />
        <ComfortRating />
      </div>
    );
  }
};

export default RatingBreakdown;
