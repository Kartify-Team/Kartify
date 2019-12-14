import React from 'react';
import RatingStars from '../Reviews/Stars.jsx';
import Price from '../Price/index.jsx';

const ProductCard = ({ product, style, rating, changeProduct }) => {
  if (product === null) {
    return (
      <div className="productCard">
        <button
          className="cardButton"
          type="button"
          onClick={() => console.log('action')}
          src=""
        >
          X
        </button>
      </div>
    );
  } else {
    return (
      <div className="productCard" onClick={() => changeProduct(product.id)} >
        <div className="productCardImage">
          <img
            className="cardImage"
            src={
              style === undefined || style.thumbnail === null
                ? '/img/default.png'
                : style.thumbnail
            }
          />
          <button
            className="cardButton"
            type="button"
            onClick={() => console.log('action')}
            src=""
          >
            X
          </button>
        </div>
        <div className="productCardDescription">
          <div className="productCardInfo">
            {product.category.toUpperCase()}
            <br />
            <br />
            {product.name}
          </div>
          <div className="productCardPrice">
            <Price originalPrice={product.default_price} salePrice={style ? style.salePrice : null} />
          </div>
          <div className="productCardRating">
            <RatingStars stars={rating === undefined ? 0 : rating} />
          </div>
        </div>
      </div>
    );
  }
};

export default ProductCard;
