import React from 'react';

const ProductImage = ({ imageInfo }) => (
  <div id="product-image-container">
    <img
      id="main-product-image"
      src={!!imageInfo && !!imageInfo.url ? imageInfo.url : '/img/default.png'}
    />
  </div>
);

export default ProductImage;
