import React, { useState, useEffect } from 'react';
import { getInventory } from '../../utils/styleHelpers';

const Cart = ({ inventory }) => {
  const availableSizes = getInventory(inventory).sort(
    (a, b) => Number(a[0]) - Number(b[0])
  );
  const [availableInventory, setAvailableInventory] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedQty, setSelectedQty] = useState(null);

  const changeSelectedSize = e => {
    setSelectedSize(e.target.value);
  };

  const changeSelectedQty = e => {
    setSelectedQty(e.target.value);
  };

  const createQuantity = num => {
    return new Array(num).fill(0);
  };

  useEffect(() => {
    setAvailableInventory(inventory[selectedSize]);
    setSelectedQty(null);
  }, [selectedSize]);

  useEffect(() => {
    setSelectedSize(null);
    setSelectedQty(null);
  }, [inventory]);

  return (
    <div className="interaction-item" id="cart-container">
      <select
        id="size-button"
        value={!selectedSize ? 'default' : selectedSize}
        onChange={changeSelectedSize}
      >
        {availableSizes.length > 0 ? (
          <option value="default" disabled hidden>
            SELECT SIZE
          </option>
        ) : null}
        {availableSizes.length > 0 ? (
          availableSizes.map(size => {
            return (
              <option key={`size-${size[0]}`} value={size[0]}>
                {size[0]}
              </option>
            );
          })
        ) : (
          <option>OUT OF STOCK</option>
        )}
      </select>

      <select
        id="qty-button"
        value={!selectedQty ? 'default' : selectedQty}
        onChange={changeSelectedQty}
      >
        <option value="default" disabled hidden>
          -
        </option>
        {availableInventory > 0
          ? createQuantity(
              availableInventory < 16 ? availableInventory : 15
            ).map((qty, idx) => {
              return <option key={`quantity-${idx + 1}`}>{idx + 1}</option>;
            })
          : null}
      </select>
      <button id="add-button" className="overview-button">
        ADD TO BAG
      </button>
      <button id="star-button" className="overview-button">
        ☆
      </button>
    </div>
  );
};

export default Cart;
