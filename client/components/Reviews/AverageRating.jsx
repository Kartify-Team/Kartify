import React from 'react';
import Stars from './Stars';

const AverageRating = ({ averageRating }) => (
  <div id="avg-rating-container">
    <h2 className="avg-rating-header">{averageRating}</h2>
    <div id="avg-rating-stars">
      <Stars stars={averageRating} />
    </div>
  </div>
);

export default AverageRating;
