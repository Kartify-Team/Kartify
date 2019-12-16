import React from 'react';
import StyleSelector from './StyleSelector';
import Cart from './Cart';
import Stars from '../Reviews/Stars';
import Price from '../Price';

const ProductInteraction = ({
  product,
  average,
  currentStyle,
  changeStyle,
  numReviews
}) => {
  return (
    <div id="product-interaction-container">
      <div id="overview-info" className="interaction-item">
        <span id="stars-reviews">
          <Stars stars={average || 0} />
          <a id="review-link" href="#reviews-container">
            {numReviews > 0 ? `Read All ${numReviews} Reviews` : null}
          </a>
        </span>
        <h3>{product.category}</h3>
        <h1>{product.name}</h1>
        {!currentStyle ? null : (
          <Price
            originalPrice={currentStyle.original_price}
            salePrice={currentStyle.sale_price}
          />
        )}
      </div>
      <StyleSelector styles={product.styles} changeStyle={changeStyle} />
      {!product.styles ? null : <Cart currentStyle={currentStyle} />}
    </div>
  );
};

export default ProductInteraction;
