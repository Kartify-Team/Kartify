import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery';

const ProductImage = ({ currentStyle }) => {
  const changeImage = (image = '/img/default.png') => {
    setCurrentImage(image);
  };

  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    if (!!currentStyle) {
      changeImage(currentStyle.photos[0].url || '/img/default.png');
    }
  }, [currentStyle]);

  return (
    <div id="product-image-container">
      <img id="main-product-image" src={currentImage} />
    </div>
  );
};

export default ProductImage;
