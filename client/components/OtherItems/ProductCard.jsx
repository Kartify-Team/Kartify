import React, { useState } from 'react';
import RatingStars from '../Reviews/Stars.jsx';
import Price from '../Price/index.jsx';
import { addOutfitProduct, removeOutfitProduct } from '../../utils/localStorage.js';
import ComparisonModal from './Related Products/ComparisonModal.jsx';

const ProductCard = ({ type, currentProduct, product, style, rating, changeProduct, getMyOutfit, setIsOpen, setComparedProduct }) => {

  const defineButtonStyle = () => {
    if (type === 'relatedProduct') {
      return '★';
    } else if (type === 'outfitProduct') {
      return 'x';
    }
  };

  const handleActionButtonClick = (e, id) => {
    if (type === 'relatedProduct') {
      e.preventDefault();
      setIsOpen(true);
      setComparedProduct(product);
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
              handleActionButtonClick(e, product.id);
            } else {
              changeProduct(product.id); 
              window.scroll(0, 0);
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
            // onClick={(e) => handleActionButtonClick(e, product.id)}
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
