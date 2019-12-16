import React from 'react';

const StyleSelector = ({ styles, changeStyle }) => {
  if (!styles) {
    return null;
  } else {
    return (
      <div className="interaction-item">
        <br />
        <p>STYLE > SELECTED STYLE</p>
        <div id="style-selector-container">
          {styles.results.map(style => {
            return (
              <img
                className="style-image"
                key={`${styles.product_id}-${style.style_id}`}
                onClick={() => {
                  changeStyle(style);
                }}
                src={style.photos[0].url || '/img/default.png'}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default StyleSelector;
