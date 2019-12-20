import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard.jsx';

const ProductsCarousel = ({ products, changeProduct, handleClick }) => {

  return (
    <div className="sliderContainer">
      {products.map((product, i) => {
        if (product === null) {
          // return <ProductCard key={0} currentProduct={mainProduct} product={product} getMyOutfit={getMyOutfit} />;
        } else {
          return (
            <Link key={product.id} to={`${product.id}`} >
              <ProductCard product={product} changeProduct={changeProduct} handleClick={handleClick} />
            </Link>
          );
        }
      })}
    </div>
  );
};
export default ProductsCarousel;