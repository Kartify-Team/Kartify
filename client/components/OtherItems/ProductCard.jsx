import React from 'react';
import RatingStars from '../Reviews/Stars.jsx';
import Price from '../Price/index.jsx';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, handleClick, setActionButton }) => {

  const getCoverImage = () => {
    if (product.coverImage === null) {
      return <img className='cardImage' src='/img/default.png' />;
    } else {
      return <img className='cardImage' src={product.coverImage} />;
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
      // <div className="productCard" id="addOutfit" onClick={() => {
      //   addOutfitProduct(currentProduct.id);
      //   getMyOutfit();
      // }}>
      <div className="productCard" id="addOutfit" onClick={e => handleClick(e, product)}>
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

      <Link key={product.id} to={`${product.id}`} >
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
      </Link>
    );
  }
};

export default ProductCard;