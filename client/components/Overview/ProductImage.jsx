import React from 'react';

const ProductImage = ({ currentStyle }) => {
  return (
    <div id="product-image-container">
      <img
        id="main-product-image"
        src={!!currentStyle ? currentStyle.photos[0].url : '/img/default.png'}
      />
    </div>
  );
};

export default ProductImage;
