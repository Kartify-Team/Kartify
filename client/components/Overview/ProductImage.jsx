import React, { useState, useEffect } from "react";
import ImageGallery from "./ImageGallery";

const ProductImage = ({ currentStyle }) => {
  const changeImage = (image = "/img/default.png") => {
    setCurrentImage(image);
  };

  const [currentImage, setCurrentImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateIndex = (type = "right") => {
    if (type === "right") {
      setCurrentIndex(currentIndex + 1);
      changeImage(currentStyle.photos[currentIndex + 1].url);
    } else {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        changeImage(currentStyle.photos[currentIndex - 1].url);
      }
    }
  };

  useEffect(() => {
    if (!!currentStyle) {
      for (let i = 0; i < currentStyle.photos.length; i++) {
        if (currentStyle.photos[i].url === currentImage) {
          setCurrentIndex(i);
        }
      }
    }
  }, [currentImage]);

  useEffect(() => {
    if (!!currentStyle) {
      changeImage(currentStyle.photos[currentIndex].url);
      setCurrentIndex(0);
    }
  }, [currentStyle]);

  // useEffect(() => {
  //   if (!!currentStyle) {
  //     changeImage(currentStyle.photos[currentIndex].url);
  //   }
  // }, [currentIndex]);

  return (
    <div id="product-image-container">
      <ImageGallery
        images={!currentStyle ? [] : currentStyle.photos}
        currentImage={currentImage}
        changeImage={changeImage}
        currentIndex={currentIndex}
        updateIndex={updateIndex}
      />
      <img id="main-product-image" src={currentImage} />
      <i
        className="fa fa-chevron-left fa-2x"
        id="image-left-arrow"
        onClick={() => {
          updateIndex("left");
        }}
        style={{
          visibility:
            !!currentStyle && currentStyle.photos[0].url !== currentImage
              ? "visible"
              : "hidden"
        }}
      />
      <i
        className="fa fa-chevron-right fa-2x"
        id="image-right-arrow"
        onClick={() => {
          updateIndex("right");
        }}
        style={{
          visibility:
            !!currentStyle && currentIndex < currentStyle.photos.length - 1
              ? "visible"
              : "hidden"
        }}
      />
    </div>
  );
};

export default ProductImage;
