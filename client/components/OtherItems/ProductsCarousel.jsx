import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';

const ProductsCarousel = ({ products, handleClick, setActionButton }) => {

  const [pointer, setPointer] = useState(0);

  let cardsToRender = 5;

  return (
    <div className='sliderContainer'>
      <i
        className='fa fa-chevron-left fa-2x leftArrowCarousel'
        onClick={() => {                
          setPointer(pointer - 1);
        }}
        style={{
          visibility: pointer > 0 ? 'visible' : 'hidden'
        }}
      />
      {products.map((product, i) => {
        if (products.length < cardsToRender || (i < pointer + cardsToRender && i >= pointer)) {
          return (
            <ProductCard 
              key={product === null ? 0 : product.id} 
              product={product} 
              handleClick={handleClick}
              setActionButton={setActionButton}
            />
          );
        }
      })}
      <i
        className='fa fa-chevron-right fa-2x rightArrowCarousel'
        onClick={() => {
          setPointer(pointer + 1);
        }}
        style={{
          visibility: pointer + cardsToRender < products.length ? 'visible' : 'hidden'
        }}
      />
    </div>
  );
};
export default ProductsCarousel;