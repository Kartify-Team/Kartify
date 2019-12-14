import React from 'react';

const Stars = ({ stars }) => {
  const percentage = (Math.round(((stars * 100) / 5) * 4) / 4).toFixed(2);
  const topStyle = {
    width: `${percentage}%`
  };
  
  if (stars === 0) {
    return (
      <div className="star-container"></div>
    );
  } else {
    return (
      <div className="star-container">
        <span className="bottom-star">
          <span className="fa fa-star-o"></span>
          <span className="fa fa-star-o"></span>
          <span className="fa fa-star-o"></span>
          <span className="fa fa-star-o"></span>
          <span className="fa fa-star-o"></span>
        </span>
        <span className="top-star" style={topStyle}>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </span>
      </div>
    );
  }
};

export default Stars;
