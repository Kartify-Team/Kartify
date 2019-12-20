import React, { useState } from 'react';
import ProductsCarousel from '../ProductsCarousel.jsx';

const MyOutfit = ({ 
  myOutfit, 
  mainProduct, 
  changeProduct 
}) => {

  const handleClick = (e, product) => {
    if (e.target.className.includes('cardButton')) {
      e.preventDefault();
      // remove card
    } else {
      changeProduct(product.id); 
      window.scroll(0, 0);
    }
  };

  if (myOutfit) {
    return (
      <>
        <ProductsCarousel products={myOutfit} changeProduct={changeProduct} handleClick={handleClick} />
      </>
    );
  } else {
    return <></>;
  }
};

export default MyOutfit;