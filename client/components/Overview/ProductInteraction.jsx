import React from 'react';
// import Stars from 'future stars component';
// import Price from 'future price component';
import StyleSelector from './StyleSelector';
import Cart from './Cart';

const ProductInteraction = ({ product, styles }) => (
  <div id="product-interaction-container">
    <div className="interaction-item">
      <p>Stars Component</p>
      <a>Read All Reviews</a>
      <h3>{product.category}</h3>
      <h1>{product.name}</h1>
      <p>Price Component</p>
    </div>
    <StyleSelector />
    <Cart />
  </div>
);

export default ProductInteraction;
