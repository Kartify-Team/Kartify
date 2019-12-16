import React from 'react';
import StyleSelector from './StyleSelector';
import Cart from './Cart';
import Stars from '../Reviews/Stars';
import Price from '../Price';

const ProductInteraction = ({ product, average }) => (
  <div id="product-interaction-container">
    <div id="overview-info" className="interaction-item">
      <span id="stars-reviews">
        <Stars stars={average || 0} />
        <a id="review-link" href="#reviews-container">
          Read All Reviews
        </a>
      </span>
      <h3>{product.category}</h3>
      <h1>{product.name}</h1>
      {!product.imageInfo ? null : (
        <Price
          originalPrice={product.imageInfo.originalPrice}
          salePrice={product.imageInfo.salePrice}
        />
      )}
    </div>
    {!product.styles ? null : <StyleSelector styles={product.styles} />}
    <Cart />
  </div>
);

export default ProductInteraction;
