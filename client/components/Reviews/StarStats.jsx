import React from 'react';
import AverageRating from './AverageRating.jsx';
import StarBar from './StarBar';

const StarStats = ({ rating, total, ratings, toggleFilter }) => {
  let stars = {};
  for (let i = 1; i <= 5; i++) {
    if (ratings[i] === undefined) {
      stars[i] = 0;
    } else {
      stars[i] = ratings[i];
    }
  }

  return (
    <div id="star-stats-container">
      <AverageRating averageRating={rating} />
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
