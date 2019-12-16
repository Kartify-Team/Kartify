import React, { useEffect } from 'react';
import ProductsCarousel from './ProductsCarousel.jsx';
import 'regenerator-runtime';

const OtherItems = ({
  productInfo,
  changeProduct,
  // Related Products
  relatedProducts = [],
  relatedProductsStyles = [],
  relatedProductsRatings = [],
  getRelatedProducts,
  getRelatedProductsStyles,
  getRelatedProductsRatings,
  // My Outfit
  myOutfit = [null, null, null, null, null],
  myOutfitStyles = [],
  myOutfitRatings = [],
  getMyOutfit,
  saveOutfit,
  getMyOutfitStyles,
  getMyOutfitRatings,
}) => {

  // Only call once


  // Call every time product changes
  useEffect(() => {
    if (productInfo) {
      getRelatedProducts(productInfo.id);
      getRelatedProductsStyles(productInfo.id);
      getRelatedProductsRatings(productInfo.id);
      getMyOutfit();
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
          <ProductsCarousel products={myOutfit} styles={myOutfitStyles} ratings={myOutfitRatings} changeProduct={changeProduct}/>
        </div>
      </div>
    );
  }
};

export default OtherItems;
