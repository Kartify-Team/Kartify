import React, { useState } from 'react';
import ProductsCarousel from '../ProductsCarousel.jsx';
import { removeOutfitProduct } from '../../../utils/localStorage.js'
import { addOutfitProduct } from '../../../utils/localStorage.js';
import { getDefaultStyle } from '../../../utils/getCoverImage.js';

const MyOutfit = ({ 
  myOutfit,
  changeMyOutfit, 
  mainProduct,
  average, 
  changeProduct 
}) => {

  const handleClick = (e, product) => {
    if (product === null) {
      let defaultStyle = getDefaultStyle(mainProduct.styles);
      let newProduct = {...mainProduct};
      newProduct.coverImage = defaultStyle.url;
      newProduct.rating = average;
      newProduct.salePrice = parseInt(defaultStyle.salePrice);
      newProduct.defaultPrice = parseInt(defaultStyle.originalPrice);
      addOutfitProduct(mainProduct.id);
      changeMyOutfit(newProduct, myOutfit, 'add');
    }
    else if (e.target.className.includes('cardButton')) {
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
        <ProductsCarousel 
          products={myOutfit} 
          handleClick={handleClick} 
          setActionButton={setActionButton} 
        />
      </>
    );
  } else {
    return <></>;
  }
};

export default MyOutfit;