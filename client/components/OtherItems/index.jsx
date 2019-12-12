import React, { useEffect } from 'react';
import ProductsCarousel from './ProductsCarousel.jsx';
import 'regenerator-runtime';

const OtherItems = ({relatedProducts, myOutfit, getRelatedProducts, getMyOutfit}) => {

  useEffect(() => {
    // get ID
    getRelatedProducts(3)   // TODO: CHANGE HARDCODED ID
    // get My Outfit from User
  }, [])

  return (
    <div id='otherItems'>
      <div className='otherItemsContainer'>
        <ProductsCarousel products={relatedProducts}/>
        {/* <ProductsCarousel products={myOutfit} /> */}
      </div>
    </div>
  )
};

export default OtherItems;