import React from 'react';
import Stars from './Stars';

const AverateRating = ({ averateRating }) => (
  <div id="avg-rating-container">
    <h2 className="avg-rating-header">{averateRating}</h2>
    <div id="avg-rating-stars">
      <Stars stars={averateRating} />
    </div>
  </div>
);

export default AverateRating;
