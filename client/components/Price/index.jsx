import React from "react";

const Price = ({ originalPrice, salePrice, name }) => {
  if (!salePrice || salePrice === "0") {
    return (
      <div className={!name ? "priceContainer" : name}>
        <p className="originalPrice">${originalPrice}</p>
      </div>
    );
  } else {
    return (
      <div className={!name ? "priceContainer" : name}>
        <p>
          <span className="priceDiscount">${salePrice}</span>
          <span className="regularPriceDiscount">${originalPrice}</span>
        </p>
      </div>
    );
  }
};

export default Price;
