import React from 'react';

const ProductCard = ({product}) => {
  if (product === null) {
    return (
      <div className='productCard'>
        <button className='cardButton' type='button' onClick={() => console.log('action')} src=''>X</button>
      </div>
    )
  } else {
    return (
      <div className='productCard'>
        <div className='productCardImage'>
          <img className='cardImage' src='https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' />
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
    )
  }
}

export default ProductCard;
