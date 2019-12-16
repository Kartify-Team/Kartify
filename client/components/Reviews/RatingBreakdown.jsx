import React, { useState, useEffect } from 'react';
import StarStats from './StarStats';
import Characteristic from './characteristic';

const RatingBreakdown = ({
  productId,
  ratings,
  characteristics,
  totalRatings
}) => {
  // let [totalRatings, setTotalRatings] = useState(0);
  // useEffect(() => {
  //   if (reviews !== null && reviews !== undefined) {
  //     setTotalRatings(getTotalRatings(reviews));
  //   }
  // }, []);
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
          />
          {Object.keys(characteristics).map(characteristic => (
            <Characteristic
              type={characteristic}
              value={characteristics[characteristic].value}
              key={characteristic.id}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default RatingBreakdown;
