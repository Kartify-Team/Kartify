import React from 'react';

const Cart = props => (
  <div className="interaction-item" id="cart-container">
    <select id="size-button" defaultValue="default">
      <option value="default" disabled hidden>
        SELECT SIZE
      </option>
      <option>1</option>
      <option>2</option>
    </select>

    {/* QUANTITY SELECTOR */}
    <select id="qty-button">
      <option>1</option>
    </select>
    <button id="add-button" className="overview-button">
      ADD TO BAG
    </button>
    <button id="star-button" className="overview-button">
      O
    </button>
  </div>
);

export default Cart;
