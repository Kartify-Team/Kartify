import React, { useEffect } from 'react';
import ProductsCarousel from './ProductsCarousel.jsx';
import 'regenerator-runtime';

const OtherItems = ({
  productInfo,
  changeProduct,
  relatedProducts = [],
  relatedProductsStyles = [],
  relatedProductsRatings = [],
  myOutfit = [],
  getRelatedProducts,
  getRelatedProductsStyles,
  getRelatedProductsRatings,
  getMyOutfit,
}) => {
  useEffect(() => {
    if (productInfo) {
      getRelatedProducts(productInfo.id);
      getRelatedProductsStyles(productInfo.id);
      getRelatedProductsRatings(productInfo.id);
      // get My Outfit from User
    }
  }, [productInfo]);

  if (productInfo === null) {
    return <div id="otherItems"></div>;
  } else {
    return (
      <div id="otherItems">
        <div className="otherItemsContainer">
          <h3>Related Products</h3>
          <ProductsCarousel products={relatedProducts} styles={relatedProductsStyles} ratings={relatedProductsRatings} changeProduct={changeProduct}/>
          <h3>Your Outfit</h3>
        </div>
      </div>
    );
  }
};

export default OtherItems;
