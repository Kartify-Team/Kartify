import React from 'react';
import RelatedProductsContainer from '../../containers/OtherItems/RelatedProducts.js';
import MyOutfitContainer from '../../containers/OtherItems/MyOutfit.js';
import 'regenerator-runtime';

const OtherItems = () => {
  return (
    <div id="otherItems">
      <h3>Related Products</h3>
      <RelatedProductsContainer />
      <h3>My Outfit</h3>
      <MyOutfitContainer />
    </div>
  );
}

export default OtherItems;