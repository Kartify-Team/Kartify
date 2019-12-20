import React, { useState } from 'react';
import ProductCard from './ProductCard.jsx';

const ProductsCarousel = ({ products, changeProduct, handleClick, setActionButton }) => {

  return (
    <div className="sliderContainer">
      {products.map((product) => {
        return (
          <ProductCard key={product === null ? 0 : product.id} product={product} changeProduct={changeProduct} handleClick={handleClick} setActionButton={setActionButton} />
        );
      })}
    </div>
  );
};
export default ProductsCarousel;