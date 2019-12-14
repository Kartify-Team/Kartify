import React from 'react';

const StarBar = ({ count, total, label }) => {
  const dynamicStyle = {
    width: `${(count / total) * 100}%`
  };
  return (
    <>
      <div className="star-bar-container">
        <span className="star-bar-label">{label} stars</span>
        <div className="star-bar-static">
          <div className="star-bar-dynamic" style={dynamicStyle}></div>
        </div>
      </div>
    </>
  );
};

export default StarBar;
