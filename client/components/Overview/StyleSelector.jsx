import React from 'react';

const StyleSelector = ({ styles }) => (
  <div className="interaction-item">
    <div id="style-selector-container">
      <br />
      <p>STYLE > SELECTED STYLE</p>
      <br />
      {styles.results.map(style => {
        return (
          <img
            className="style-image"
            key={`${styles.product_id}-${style.style_id}`}
            src={style.photos[0].url}
          />
        );
      })}
    </div>
  </div>
);

export default StyleSelector;
