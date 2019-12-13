import React from 'react';
// import Stars from 'future stars component';
// import Price from 'future price component';
import StyleSelector from './StyleSelector';
import Cart from './Cart';
import Stars from '../Reviews/Stars';

const ProductInteraction = ({ product, styles, average }) => (
  <div id="product-interaction-container">
    <div id="overview-info" className="interaction-item">
      <span id="stars-reviews">
        <Stars stars={average || 3} />
        <a id="review-link-container">Read All Reviews</a>
      </span>
      <h3>{product.category}</h3>
      <h1>{product.name}</h1>
      <p>Price Component</p>
    </div>
    <StyleSelector styles={styles} />
    <Cart />
  </div>
);

export default ProductInteraction;
