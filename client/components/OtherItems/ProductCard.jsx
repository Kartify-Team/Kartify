import React from 'react';
import ProductsCarousel from './ProductsCarousel';

const ProductCard = ({product}) => {
  if (product === null) {
    return (
      <div className='productCard'>
        DO NOT RENDER <br/>
        <button type='button' onClick={() => console.log('action')}>act btn</button>
      </div>
      
    )
  } else {
    return (
      <div className='productCard'>
        {product.name}
        <div className='productCardImage'>
          {/* <img src='' /> */}
        </div>
        <div className='productCardDescription'>
          <div className='ProductCardInfo'>
          </div>
          <div className='ProductCardPrice'>
          </div>
          <div className='ProductCardRating'>
          </div>
        </div>
        {/* //TODO: Create action */}
        <button type='button' onClick={() => console.log('action')}>act btn</button>
      </div>
    )
  }
}

export default ProductCard;
