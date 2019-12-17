import React, { useState } from 'react';

const StarsSelector = ({ stars, setRating }) => {
  const [percentage, setPercentage] = useState(0);
  const fontSize = '1.5em';

  const topStyle = {
    width: `${percentage}%`,
    fontSize
  };

  const bottomStyle = {
    fontSize
  };

  const handleClick = (percentage, rating) => {
    setPercentage(percentage);
    setRating(rating);
  };

  let meaning;
  if (percentage === 20) meaning = 'Poor';
  if (percentage === 40) meaning = 'Fair';
  if (percentage === 60) meaning = 'Average';
  if (percentage === 80) meaning = 'Good';
  if (percentage === 100) meaning = 'Great';

  return (
    <>
      <div className="star-container">
        <span className="bottom-star" style={bottomStyle}>
          <span
            className="fa fa-star-o"
            onClick={() => handleClick(20, 1)}
          ></span>
          <span
            className="fa fa-star-o"
            onClick={() => handleClick(40, 2)}
          ></span>
          <span
            className="fa fa-star-o"
            onClick={() => handleClick(60, 3)}
          ></span>
          <span
            className="fa fa-star-o"
            onClick={() => handleClick(80, 4)}
          ></span>
          <span
            className="fa fa-star-o"
            onClick={() => handleClick(100, 5)}
          ></span>
        </span>
        <span className="top-star" style={topStyle}>
          <span
            className="fa fa-star"
            onClick={() => handleClick(20, 1)}
          ></span>
          <span
            className="fa fa-star"
            onClick={() => handleClick(40, 2)}
          ></span>
          <span
            className="fa fa-star"
            onClick={() => handleClick(60, 3)}
          ></span>
          <span
            className="fa fa-star"
            onClick={() => handleClick(80, 4)}
          ></span>
          <span
            className="fa fa-star"
            onClick={() => handleClick(100, 5)}
          ></span>
        </span>
      </div>
      <h2 id="star-meaning">{meaning}</h2>
    </>
  );
};

export default StarsSelector;
