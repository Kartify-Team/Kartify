import React from 'react';
import RatingStars from '../Reviews/Stars.jsx';
import Price from '../Price/index.jsx';

const ProductCard = ({ product, style, rating, changeProduct }) => {
  if (product === null) {
    return (
      <div className="productCard">
        <div className="productCardImage">
          <button
            className="cardButton"
            type="button"
            src="" // TODO: ADD ICON TO BUTTON
          >
          X
          </button>
        </div>
        <div className="productCardDescription">
          <div className="productCardInfo"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="productCard" 
        onClick={
          (e) => {
            if (e.target.className === 'cardButton') {
              e.preventDefault();
            } else {
              changeProduct(product.id); 
            }
          }
        }
      >
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
            onClick={() => {}} //TODO: OPEN MODAL
            src=""
          >
            ★
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
