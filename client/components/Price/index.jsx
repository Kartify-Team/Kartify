import React from 'react';

const Price = ({originalPrice, salePrice}) => {
  if (!salePrice || salePrice === '0') {
    return (
      <div className='priceContainer'>
        <p>${originalPrice}</p>
      </div>
    );
  } else {
    return (
      <div className='priceContainer'>
        <p><span className='priceDiscount'>${salePrice}</span><span className='regularPriceDiscount'>${originalPrice}</span></p>
      </div>
    );
  }
};

export default Price;