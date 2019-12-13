import React from 'react';

const ProductCard = ({ product, style }) => {
  if (product === null) {
    return (
      <div className='productCard'>
        <button className='cardButton' type='button' onClick={() => console.log('action')} src=''>X</button>
      </div>
    );
  } else {
    return (
      <div className='productCard'>
        <div className='productCardImage'>
          <img className='cardImage' src={style.thumbnail} />
          <button className='cardButton' type='button' onClick={() => console.log('action')} src=''>X</button>
        </div>
        <div className='productCardDescription'>
          <div className='productCardInfo'>
            {product.category.toUpperCase()}<br/><br/>
            {product.name}
          </div>
          <div className='productCardPrice'>
            ${product.default_price}
          </div>
          <div className='productCardRating'>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductCard;
