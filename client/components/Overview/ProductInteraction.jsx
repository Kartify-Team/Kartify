import React from 'react';
// import Stars from 'future stars component';
// import Price from 'future price component';
import StyleSelector from './StyleSelector';
import Cart from './Cart';

const ProductInteraction = props => (
  <div id="product-interaction-container">
    <div className="interaction-item">
      Placeholder for Stars Component, Price Component and Product Information
    </div>
    <StyleSelector />
    <Cart />
  </div>
);

export default ProductInteraction;
