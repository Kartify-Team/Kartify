import React from 'react';

const Cart = props => (
  <div className="interaction-item" id="cart-container">
    <select id="size-button">
      <option value="none" selected disabled hidden>
        SELECT SIZE
      </option>
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
