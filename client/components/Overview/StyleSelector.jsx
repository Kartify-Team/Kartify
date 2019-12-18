import React from "react";

const StyleSelector = ({ styles, changeStyle, currentStyle }) => {
  if (!styles) {
    return null;
  } else {
    return (
      <div className="interaction-item">
        <br />
        <p>STYLE > {!!currentStyle ? currentStyle.name : null}</p>
        <div id="style-selector-container">
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
