import React, { useEffect } from 'react';
import axios from 'axios';
import ProductsCarousel from './ProductsCarousel.jsx';
import helpers from '../../greenfieldAPI/index.js';
import 'regenerator-runtime';

const OtherItems = ({relatedProducts, myOutfit}) => {

  useEffect(() => {
    // get ID
    getRelatedProducts(2)
    // get My Outfit
  })

  const getRelatedProducts = async (id) => {
    let products = await helpers.getRelatedProductsInfo(id);
    return products;
  }

  return (
    <div className='otherItems'>
      <div className='otherItemsContainer'>
        <ProductsCarousel products={relatedProducts}/>
        <ProductsCarousel products={myOutfit} />
      </div>
    </div>
  )
};

export default OtherItems;