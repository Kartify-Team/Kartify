import React from 'react';

const Price = ({ originalPrice, salePrice, name, id = '' }) => {
  if (!salePrice || salePrice === '0') {
    return (
      <div className={!name ? 'priceContainer' : name}>
        <p className="originalPrice" id={id}>
          ${originalPrice}
        </p>
      </div>
    );
  } else {
    return (
      <div className={!name ? 'priceContainer' : name}>
        <p id={id}>
          <span className="priceDiscount">${salePrice}</span>
          <span className="regularPriceDiscount">${originalPrice}</span>
        </p>
      </div>
    );
  }
};

export default Price;
