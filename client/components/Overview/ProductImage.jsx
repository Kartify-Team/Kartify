import React from 'react';

const ProductImage = ({ product }) => {
  if (!product) {
    return null;
  } else {
    if (!product.imageInfo) {
      return null;
    } else {
      return (
        <div id="product-image-container">
          <img
            id="main-product-image"
            src={
              !!product.imageInfo.url
                ? product.imageInfo.url
                : '/img/default.png'
            }
          />
        </div>
      );
    }
  }
};

export default ProductImage;
