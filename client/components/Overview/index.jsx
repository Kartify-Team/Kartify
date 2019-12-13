import React from 'react';
import ProductImage from './ProductImage';
import ProductInteraction from './ProductInteraction';
import ProductDescription from './ProductDescription';
import { productStyles } from './testData';

const Overview = ({ product, average }) => {
  console.log('PRODUCT', product);
  return (
    <div id="overview-container">
      {product !== null ? (
        <>
          <ProductImage imageInfo={product.imageInfo} />
          <ProductInteraction
            product={product}
            // Test Data **
            styles={productStyles}
            // Test Data **
            average={average}
          />
          <ProductDescription product={product} />
        </>
      ) : null}
    </div>
  );
};

export default Overview;
