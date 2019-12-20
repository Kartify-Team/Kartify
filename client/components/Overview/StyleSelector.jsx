import React from "react";

const StyleSelector = ({ styles, changeStyle, currentStyle, productName }) => {
  if (!styles) {
    return null;
  } else {
    return (
      <div id="style-selector-container">
        <div id="styles-container">
          {styles.results.map(style => {
            return (
              <div
                key={`${styles.product_id}-${style.style_id}`}
                className={
                  currentStyle === style
                    ? "selected-style-container selector-image"
                    : "selector-image"
                }
              >
                <span className="image-container">
                  <img
                    className="style-image"
                    onClick={() => {
                      changeStyle(style);
                    }}
                    src={style.photos[0].url || "/img/default.png"}
                    alt={`This is the ${style.name} style of ${productName}`}
                    title={`This is the ${style.name} style of ${productName}`}
                  />
                </span>
                {currentStyle === style ? (
                  <span id="selected-style">
                    <i className="fa fa-check" />
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default StyleSelector;
