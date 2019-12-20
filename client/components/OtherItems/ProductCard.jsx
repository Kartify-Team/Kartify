import React, { useState } from 'react';
import RatingStars from '../Reviews/Stars.jsx';
import Price from '../Price/index.jsx';
import { addOutfitProduct, removeOutfitProduct } from '../../utils/localStorage.js';
import ComparisonModal from './Related Products/ComparisonModal.jsx';

const ProductCard = ({ type, currentProduct, product, style, rating, changeProduct, getMyOutfit, setIsOpen, setComparedProduct }) => {

  const defineButtonStyle = () => {
    if (type === 'relatedProduct') {
      return <i className="fa fa-star cardButton"></i>;
    } else if (type === 'outfitProduct') {
      return <i className="fa fa-times-circle cardButton" ></i>;
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

  const getRatingStars = () => {
    if (rating === 0) {
      return;
    } else {
      return <RatingStars stars={rating} />;
    }
  };

  if (product === null) {
    return (
      <div className="productCard" id="addOutfit" onClick={() => {
        addOutfitProduct(currentProduct.id);
        getMyOutfit();
      }}>
        <div className="productCardImage">
          <button
            className="cardButton" id="plusContainer"
            type="button"
          >
            <i className="fa fa-plus fa-5x"></i>
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
            if (e.target.className.includes('cardButton')) {
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
            {getRatingStars()}
          </div>
        </div>
      </div>
    );
  }
};

export default ProductCard;
