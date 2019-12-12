import React from 'react';
import AverageRating from './AverateRating.jsx';

const StarStats = ({ rating }) => (
  <div id="star-stats-container">
    Star Stats
    <AverageRating averateRating={rating} />
  </div>
);

export default StarStats;
