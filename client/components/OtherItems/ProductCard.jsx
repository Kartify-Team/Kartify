import React from 'react';
import RatingStars from '../Reviews/Stars.jsx';
import Price from '../Price/index.jsx';
import { addOutfitProduct, removeOutfitProduct } from '../../utils/localStorage.js';

const ProductCard = ({ product, changeProduct, handleClick, setActionButton }) => {

  const defineButtonStyle = () => {
    if (type === 'relatedProduct') {
      return <i className="fa fa-star cardButton"></i>;
    } else if (type === 'outfitProduct') {
      return <i className="fa fa-times-circle cardButton" ></i>;
    }
  };

  const getCoverImage = () => {
    if (product.coverImage === null) {
      return <img className='cardImage' src='/img/default.png' />;
    } else {
      return <img className='cardImage' src={product.coverImage} />;
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
    if (product.rating === 0) {
      return;
    } else {
      return <RatingStars stars={product.rating} />;
    }
  };

  if (product === null) {
    return (
      <div className="productCard" onClick={ e => handleClick(e, product)}>
        <div className="productCardImage">
          <button
            className="cardButton"
            type="button"
          >
            <i className="fa fa-plus"></i>
          </button>
        </div>
        <div className="productCardDescription">
          <div className="productCardInfo"></div>
        </div>
      </div>
    );
  } else {    
    return (
      <div className="productCard" onClick={ e => handleClick(e, product)} >
        <div className="productCardImage">
          {getCoverImage()}
          <button
            className="cardButton"
            type="button"
          >
            {setActionButton()}
          </button>
        </div>
        <div className="productCardDescription">
          <div className="productCardInfo">
            <p className='productCardCategory'>{product.category[0].toUpperCase() + product.category.slice(1).toLowerCase()}</p>
            <p className='productCardName'>{product.name}</p>
          </div>
          <Price originalPrice={product.defaultPrice} salePrice={product.salePrice > 0 ? product.salePrice : null} />
          <div className="productCardRating">
            {getRatingStars()}
          </div>
        </div>
      </div>
    );
  }
};

export default ProductCard;
