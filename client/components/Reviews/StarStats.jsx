import React from 'react';
import AverageRating from './AverageRating.jsx';
import StarBar from './StarBar';

const StarStats = ({ rating, total, ratings, toggleFilter }) => {
  return (
    <div id="star-stats-container">
      <AverageRating averageRating={rating} />
      {Object.keys(ratings).map(rating => {
        return (
          <StarBar
            key={rating}
            count={ratings[rating]}
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
