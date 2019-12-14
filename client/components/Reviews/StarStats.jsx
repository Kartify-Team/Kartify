import React from 'react';
import AverageRating from './AverageRating.jsx';
import StarBar from './StarBar';

const StarStats = ({ rating, total, ratings }) => {
  return (
    <div id="star-stats-container">
      Star Stats
      <AverageRating averageRating={rating} />
      <div className="stars-breakdown">
        {Object.keys(ratings).map(rating => {
          return (
            <StarBar count={ratings[rating]} total={total} label={rating} />
          );
        })}
      </div>
    </div>
  );
};
export default StarStats;
