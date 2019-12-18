import React from 'react';
import RatingStars from '../Reviews/Stars.jsx';
import Price from '../Price/index.jsx';
import { addOutfitProduct, removeOutfitProduct } from '../../utils/localStorage.js';

const ProductCard = ({ type, currentProduct, product, style, rating, changeProduct, getMyOutfit }) => {

  const defineButtonStyle = () => {
    if (type === 'relatedProduct') {
      return '★';
    } else if (type === 'outfitProduct') {
      return 'x';
    }
  };

  const handleActionButtonClick = (id) => {
    if (type === 'relatedProduct') {
      // TODO: OPEN 
    } else if (type === 'outfitProduct') {
      removeOutfitProduct(id);
      getMyOutfit();
    }
  };

  if (product === null) {
    return (
      <div className="productCard" onClick={() => {
        addOutfitProduct(currentProduct.id);
        getMyOutfit();
      }}>
        <div className="productCardImage">
          <button
            className="cardButton"
            type="button"
            src="" // TODO: ADD ICON TO BUTTON
          >
          +
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
              style === undefined || style.url === null
                ? '/img/default.png'
                : style.url
            }
          />
          <button
            className="cardButton"
            type="button"
            onClick={() => handleActionButtonClick(product.id)}
            src=""
          >
            {defineButtonStyle()}
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
