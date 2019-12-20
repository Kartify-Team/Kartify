import React from 'react';
import AverageRating from './AverageRating.jsx';
import StarBar from './StarBar';

const StarStats = ({
  rating,
  total,
  ratings,
  toggleFilter,
  totalReviews,
  reviews
}) => {
  let stars = {};
  for (let i = 1; i <= 5; i++) {
    if (ratings[i] === undefined) {
      stars[i] = 0;
    } else {
      stars[i] = ratings[i];
    }
  }

  let recommended = 0;
  reviews.forEach(review => {
    if (review.recommend === 1) recommended++;
  });

  return (
    <div id="star-stats-container">
      <AverageRating averageRating={rating} />
      <div
        id="recommended"
        style={{ display: totalReviews > 0 ? 'block' : 'none' }}
      >
        {Math.round((recommended / totalReviews) * 100)}% of reviews recommend
        this product
      </div>
      {Object.keys(stars)
        .reverse()
        .map(rating => {
          return (
            <StarBar
              key={rating}
              count={stars[rating]}
              total={total}
              label={rating}
              toggleFilter={toggleFilter}
            />
          );
        })}
    </div>
  );
};
export default StarStats;
