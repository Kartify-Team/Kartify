import React, { useEffect } from 'react';
import ProductsCarousel from './ProductsCarousel.jsx';
import 'regenerator-runtime';

const OtherItems = ({
  productInfo,
  relatedProducts = [],
  myOutfit,
  getRelatedProducts,
  getRelatedProductsStyles,
  relatedProductsStyles = [],
  getMyOutfit,
  getMyOutfitImages
}) => {
  useEffect(() => {
    if (productInfo) {
      getRelatedProducts(productInfo.id);
      getRelatedProductsStyles(productInfo.id);
      // get My Outfit from User
    }
  }, [productInfo]);

  if (productInfo === null) {
    return <div></div>;
  } else {
    return (
      <div id="otherItems">
        <div className="otherItemsContainer">
          <h3>Related Products</h3>
          <ProductsCarousel products={relatedProducts} styles={relatedProductsStyles}/>
          <h3>Your Outfit</h3>
          {/* <ProductsCarousel products={myOutfit} /> */}
        </div>
      </div>
    );
  }
};

export default OtherItems;
