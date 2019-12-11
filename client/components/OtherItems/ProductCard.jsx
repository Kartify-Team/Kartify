import React from 'react';

export default ({product}) => {
  if (product === null) {
    return (
      <div className='productCard'>
        DO NOT RENDER
        <button type='button' onClick={() => console.log('action')}>act btn</button>
      </div>
      
    )
  } else {
    return (
      <div className='productCard'>
        {product}
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
