import React from 'react';

const ProductImage = ({ imageInfo }) => (
  <div id="product-image-container">
    {!!imageInfo ? <img id="main-product-image" src={imageInfo.url} /> : null}
  </div>
);

export default ProductImage;
