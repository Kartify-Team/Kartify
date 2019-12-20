import React from 'react';

const StarBar = ({ count, total, label, toggleFilter }) => {
  const dynamicStyle = {
    width: `${(count / total) * 100}%`
  };

  if (total === 0) dynamicStyle.width = '0%';

  const handleClick = filter => {
    toggleFilter(filter);
  };

  return (
    <>
      <div className="star-bar-container">
        <span className="star-bar-label" onClick={() => handleClick(label)}>
          {label} stars
        </span>
        <div className="star-bar-static">
          <div className="star-bar-dynamic" style={dynamicStyle}></div>
        </div>
      </div>
    </>
  );
};

export default StarBar;
