import React from 'react';
import ProductsCarousel from './ProductsCarousel';

const ProductCard = ({ product }) => {
  if (product === null) {
    return (
      <div className="productCard">
        DO NOT RENDER <br />
        <button type="button" onClick={() => console.log('action')}>
          act btn
        </button>
      </div>
    );
  } else {
    return (
      <div className="productCard">
        <div className="productCardImage">
          {/* <img src='' /> */}
          <button
            className="cardButton"
            type="button"
            onClick={() => console.log('action')}
          >
            act btn
          </button>
        </div>
        <div className="productCardDescription">
          <div className="ProductCardInfo">
            {product.category}
            {product.name}
          </div>
          <div className="ProductCardPrice">${product.default_price}</div>
          <div className="ProductCardRating"></div>
        </div>
      </div>
    );
  }
};

export default ProductCard;
