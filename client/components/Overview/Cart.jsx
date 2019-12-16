import React from 'react';

const Cart = ({ currentStyle }) => (
  <div className="interaction-item" id="cart-container">
    <select id="size-button" defaultValue="default">
      <option value="default" disabled hidden>
        SELECT SIZE
      </option>
      <option>1</option>
      <option>2</option>
    </select>

    {/* QUANTITY SELECTOR */}
    <select id="qty-button" defaultValue="default">
      <option value="default" disabled hidden>
        -
      </option>
      {/* For each available Quantity, display 1 to max, up to 15, default is '-'*/}
      {}
    </select>
    <button id="add-button" className="overview-button">
      ADD TO BAG
    </button>
    <button id="star-button" className="overview-button">
      ☆
    </button>
  </div>
);

export default Cart;
