import React, { useState } from 'react';
import ProductsCarousel from '../ProductsCarousel.jsx';
import { removeOutfitProduct } from '../../../utils/localStorage.js'

const MyOutfit = ({ 
  myOutfit,
  changeMyOutfit, 
  mainProduct, 
  changeProduct 
}) => {

  const handleClick = (e, product) => {
    if (e.target.className.includes('cardButton')) {
      e.preventDefault();
      removeOutfitProduct(product.id);
      changeMyOutfit(product, myOutfit, 'remove');
    } else {
      changeProduct(product.id); 
      window.scroll(0, 0);
    }
  };

  const setActionButton = () => {
    return <i className="fa fa-times-circle cardButton"></i>;
  };

  if (myOutfit) {
    return (
      <>
        <ProductsCarousel products={myOutfit} changeProduct={changeProduct} handleClick={handleClick} setActionButton={setActionButton} />
      </>
    );
  } else {
    return <></>;
  }
};

export default MyOutfit;