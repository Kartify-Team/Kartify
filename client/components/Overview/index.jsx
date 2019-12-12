import React from 'react';
import ProductImage from './ProductImage';
import ProductInteraction from './ProductInteraction';
import ProductDescription from './ProductDescription';
import { productInfo, productStyles } from './testData';

const Overview = ({ product }) => (
  <div id="overview-container">
    {!!product ? (
      <>
        <ProductImage />
        <ProductInteraction product={product} styles={productStyles} />
        <ProductDescription product={product} />
      </>
    ) : null}
  </div>
);

export default Overview;
