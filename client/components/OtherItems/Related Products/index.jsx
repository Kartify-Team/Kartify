import React, { useState } from 'react';
import ProductsCarousel from '../ProductsCarousel.jsx';
import ComparisonModal from './ComparisonModal';

const RelatedProducts = ({ 
  relatedProducts, 
  mainProduct, 
  changeProduct 
}) => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [comparedProduct, setComparedProduct] = useState(null);


  const handleClick = (e, product) => {
    if (e.target.className.includes('cardButton')) {
      e.preventDefault();
      setIsOpen(true);
      setComparedProduct(product);
    } else {
      changeProduct(product.id); 
      window.scroll(0, 0);
    }
  };

  const setActionButton = () => {
    return <i className="fa fa-star cardButton"></i>;
  };

  if (relatedProducts) {
    return (
      <>
        <ProductsCarousel products={relatedProducts} handleClick={handleClick} setActionButton={setActionButton}/>
        <ComparisonModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} mainProduct={mainProduct} comparedProduct={comparedProduct} />
      </>
    );
  } else {
    return <></>;
  }
};

export default RelatedProducts;