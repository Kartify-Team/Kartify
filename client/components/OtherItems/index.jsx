import React, { useEffect } from 'react';
import ProductsCarousel from './ProductsCarousel.jsx';
import 'regenerator-runtime';

const OtherItems = ({
  relatedProducts = [],
  myOutfit,
  getRelatedProducts,
  getRelatedProductsStyles,
  relatedProductsStyles = [],
  getMyOutfit,
  getMyOutfitImages
}) => {
  useEffect(() => {
    // get ID
      getRelatedProducts(3); // TODO: CHANGE HARDCODED ID
      getRelatedProductsStyles(3);
    // get My Outfit from User
  }, []);

    console.log('RE RENDER! OTHER ITEMS!!!')
    return (
      <div id="otherItems">
        <div className="otherItemsContainer">
          <ProductsCarousel products={relatedProducts} styles={relatedProductsStyles} />
          {/* <ProductsCarousel products={myOutfit} /> */}
        </div>
      </div>
    )
  
  

};

export default OtherItems;
