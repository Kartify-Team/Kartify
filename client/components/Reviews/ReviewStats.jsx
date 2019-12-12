import React, { useState, useEffect } from 'react';
import StarStats from './StarStats';
import SizeRating from './SizeRating';
import ComfortRating from './ComfortRating';
import { getProductRatings } from '../../greenfieldAPI/reviews';

const ReviewStats = ({ productId }) => {
  const [rating, setRating] = useState(0);
  useEffect(() => {
    getProductRatings(productId).then(ratingData => setRating(ratingData));
  }, []);

  return (
    <div id="review-stats-container">
      <StarStats rating={rating.average} />
      <SizeRating />
      <ComfortRating />
    </div>
  );
};

export default ReviewStats;
