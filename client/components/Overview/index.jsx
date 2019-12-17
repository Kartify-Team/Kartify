import React, { useState, useEffect } from 'react';
import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';
import { getDefaultStyle } from '../../utils/styleHelpers';
import ProductInteractionContainer from '../../containers/Overview/ProductInteraction';

const Overview = ({ product, setProductStyles }) => {
  const [currentStyle, setCurrentStyle] = useState(null);

  useEffect(() => {
    if (product) {
      setProductStyles(product.id);
    }
  }, [!product ? '' : product.id]);

  useEffect(() => {
    const defaultStyle =
      !!product && !!product.styles ? getDefaultStyle(product.styles) : null;

    setCurrentStyle(defaultStyle);
  }, [!product || !product.styles ? '' : product.styles]);

  const changeSelectedStyle = style => {
    if (!!style) {
      setCurrentStyle(style);
    }
  };

  return (
    <div id="overview-container">
      {product !== null && product !== undefined ? (
        <>
          <ProductImage product={product} currentStyle={currentStyle} />
          <ProductInteractionContainer
            currentStyle={currentStyle}
            changeStyle={changeSelectedStyle}
          />
          <ProductDescription product={product} />
        </>
      ) : null}
    </div>
  );
};

export default Overview;
