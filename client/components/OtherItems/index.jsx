import React, { useEffect } from 'react';
import ProductsCarousel from './ProductsCarousel.jsx';
import 'regenerator-runtime';

const OtherItems = ({
  productInfo,
  changeProduct,
  getRelatedProducts,
  getProductsRatings,
  getProductsStyles,
  getMyOutfit,
  // Related Products
  relatedProducts = [],
  relatedProductsStyles = [],
  relatedProductsRatings = [],
  // My Outfit
  myOutfit = [],
  myOutfitStyles = [],
  myOutfitRatings = []
}) => {
  useEffect(() => {
    if (productInfo) {
      getRelatedProducts(productInfo.id);
      getMyOutfit();
    }
  }, [productInfo]);

  // MY OUTFIT
  useEffect(() => {
    if (myOutfit.length > 0) {
      getProductsRatings(myOutfit, 'myOutfit');
      getProductsStyles(myOutfit, 'myOutfit');
    }
  }, [myOutfit]);

  // RELATED PRODUCTS
  useEffect(() => {
    if (relatedProducts.length > 0) {
      getProductsStyles(relatedProducts, 'relatedProducts');
      getProductsRatings(relatedProducts, 'relatedProducts');
    }
  }, [relatedProducts]);

  if (productInfo === null) {
    return <div id="otherItems"></div>;
  } else {
    return (
      <div id="otherItems">
        <div className="otherItemsContainer">
          <h3 className="section-title">Related Products</h3>

          <ProductsCarousel
            type={'relatedProduct'}
            currentProduct={productInfo}
            products={relatedProducts}
            styles={relatedProductsStyles}
            ratings={relatedProductsRatings}
            changeProduct={changeProduct}
          />
          <h3>Your Outfit</h3>
          <ProductsCarousel
            type={'outfitProduct'}
            currentProduct={productInfo}
            products={myOutfit}
            styles={myOutfitStyles}
            ratings={myOutfitRatings}
            changeProduct={changeProduct}
            getMyOutfit={getMyOutfit}
          />
        </div>
      </div>
    );
  }
};

export default OtherItems;
