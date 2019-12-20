import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard.jsx';

const ProductsCarousel = ({ products, changeProduct, handleClick, setActionButton }) => {

  return (
    <div className="sliderContainer">
      {products.map((product) => {
        if (product === null) {
          return <ProductCard key={0} product={product} handleClick={handleClick} setActionButton={setActionButton} />;
        } else {
          return (
            <Link key={product.id} to={`${product.id}`} >
              <ProductCard product={product} changeProduct={changeProduct} handleClick={handleClick} setActionButton={setActionButton} />
            </Link>
          );
        }
      })}
    </div>
  );
};
export default ProductsCarousel;