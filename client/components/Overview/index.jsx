import React, { useState, useEffect } from 'react';
import ProductImage from './ProductImage';
import ProductInteraction from './ProductInteraction';
import ProductDescription from './ProductDescription';

const Overview = ({
  product,
  average,
  setProductStyles,
  setProductImageInfo
}) => {
  const [currentStyle, changeStyle] = useState(0);

  useEffect(() => {
    if (product) {
      setProductImageInfo(product.id);
      setProductStyles(product.id);
    }
  }, [!product ? '' : product.id]);

  return (
    <div id="overview-container">
      {product !== null && product !== undefined ? (
        <>
          <ProductImage product={product} />
          <ProductInteraction product={product} average={average} />
          <ProductDescription product={product} />
        </>
      ) : null}
    </div>
  );
};

export default Overview;
