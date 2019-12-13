import React, { useState, useEffect } from 'react';
import StarStats from './StarStats';
import SizeRating from './SizeRating';
import ComfortRating from './ComfortRating';
import { getTotalRatings } from '../../utils';

const RatingBreakdown = ({ productId, ratings }) => {
  let [totalRatings, setTotalRatings] = useState(0);
  useEffect(() => {
    if (ratings.ratings !== undefined && ratings.ratings !== null) {
      setTotalRatings(getTotalRatings(ratings.ratings));
    }
  }, []);

  if (ratings === null || ratings === undefined) {
    return null;
  } else {
    return (
      <div id="review-stats-container">
        <StarStats
          rating={ratings.ratings === null ? null : ratings.ratings.average}
        />
        <SizeRating />
        <ComfortRating />
      </div>
    );
  }
};

export default RatingBreakdown;
