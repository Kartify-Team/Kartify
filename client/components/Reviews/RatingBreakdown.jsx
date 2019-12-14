import React, { useState, useEffect } from 'react';
import StarStats from './StarStats';
import SizeRating from './SizeRating';
import ComfortRating from './ComfortRating';
import { getTotalRatings } from '../../utils';

const RatingBreakdown = ({ productId, reviews, characteristics }) => {
  let [totalRatings, setTotalRatings] = useState(0);
  useEffect(() => {
    if (reviews !== null && reviews !== undefined) {
      setTotalRatings(getTotalRatings(reviews));
    }
  }, []);

  if (
    reviews === null ||
    reviews === undefined ||
    characteristics === null ||
    characteristics.Size === undefined ||
    characteristics.Comfort === undefined
  ) {
    return null;
  } else {
    return (
      <div id="review-stats-container">
        <StarStats rating={reviews === null ? null : reviews.average} />
        <SizeRating rating={characteristics.Size.value} />
        <ComfortRating rating={characteristics.Comfort.value} />
      </div>
    );
  }
};

export default RatingBreakdown;
