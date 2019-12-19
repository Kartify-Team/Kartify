import React, { useState, useEffect } from 'react';
import StarStats from './StarStats';
import Characteristic from './characteristic';

const RatingBreakdown = ({
  ratings,
  characteristics,
  totalRatings,
  toggleFilter
}) => {
  const ratingsWithoutAvg = { ...ratings };
  delete ratingsWithoutAvg.average;
  if (!ratings || !characteristics) {
    return null;
  } else {
    return (
      <div id="review-stats-container">
        <div id="breakdown">
          <StarStats
            rating={ratings === null ? null : ratings.average}
            total={totalRatings}
            ratings={ratingsWithoutAvg}
            toggleFilter={toggleFilter}
          />
          {Object.keys(characteristics).map(characteristic => (
            <Characteristic
              type={characteristic}
              value={characteristics[characteristic].value}
              key={characteristics[characteristic].id}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default RatingBreakdown;
