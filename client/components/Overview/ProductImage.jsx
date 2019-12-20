import React, { useState, useEffect } from "react";
import ImageGallery from "./ImageGallery";
import Modal from "react-modal";

const ProductImage = ({ currentStyle }) => {
  const changeImage = image => {
    setCurrentImage(image || "/img/default.png");
  };

  const [currentImage, setCurrentImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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
          return;
        }
      }
      setCurrentIndex(0);
    }
  }, [currentImage]);

  useEffect(() => {
    if (!!currentStyle) {
      changeImage(currentStyle.photos[0].url);
      setCurrentIndex(0);
    }
  }, [currentStyle]);

  return (
    <div id="product-image-container">
      <ImageGallery
        images={!currentStyle ? [] : currentStyle.photos}
        currentImage={currentImage}
        changeImage={changeImage}
        currentIndex={currentIndex}
      />
      <img
        id="main-product-image"
        src={currentImage}
        onClick={() => {
          setIsOpen(true);
        }}
        alt="Main Product Image"
        title="Main Product Image"
      />
      <i
        className="fa fa-chevron-left fa-2x"
        id="image-left-arrow"
        onClick={() => {
          updateIndex("left");
        }}
        style={{
          visibility:
            !!currentStyle &&
            currentStyle.photos.length > 1 &&
            currentStyle.photos[0].url !== currentImage
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
      <i
        className="fa fa-expand"
        id="image-expand"
        onClick={() => {
          setIsOpen(true);
        }}
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="expanded-image-modal"
        overlayClassName="expanded-image-modal-overlay"
      >
        <div id="expanded-image-modal">
          <img id="expanded-image" src={currentImage} />
          <i
            className="fa fa-chevron-left fa-3x"
            id="expanded-left"
            onClick={() => {
              updateIndex("left");
            }}
            style={{
              visibility:
                !!currentStyle &&
                currentStyle.photos.length > 1 &&
                currentStyle.photos[0].url !== currentImage
                  ? "visible"
                  : "hidden"
            }}
          />
          <i
            className="fa fa-chevron-right fa-3x"
            id="expanded-right"
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
      </Modal>
    </div>
  );
};

export default ProductImage;
