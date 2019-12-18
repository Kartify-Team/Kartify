import React, { useState, useEffect } from "react";

const ImageGallery = ({ images, currentImage, changeImage, currentIndex }) => {
  const [topIndex, setTopIndex] = useState(0);

  const updateTopIndex = type => {
    if (type === "down") {
      if (topIndex + 7 < images.length) {
        setTopIndex(topIndex + 1);
      }
    } else {
      if (topIndex > 0) {
        setTopIndex(topIndex - 1);
      }
    }
  };

  useEffect(() => {
    if (!!images && images.length > 1) {
      if (topIndex < currentIndex && topIndex > currentIndex - 7) {
        return;
      } else {
        if (topIndex > currentIndex) {
          setTopIndex(currentIndex);
        } else if (currentIndex > images.length - 7) {
          setTopIndex(images.length - 7);
        }
      }
    }
  }, [currentIndex]);

  return (
    <div id="image-gallery">
      <i
        className="fa fa-chevron-up fa-2x gallery-arrow"
        onClick={() => {
          updateTopIndex("up");
        }}
        style={{
          visibility: topIndex > 0 && images.length > 7 ? "visible" : "hidden"
        }}
      />
      {images.length > 1
        ? images.map((image, idx) => {
            if (images.length < 7 || (idx < topIndex + 7 && idx >= topIndex)) {
              return (
                <div
                  key={`image-gallery-thumbnail-${idx}`}
                  className={
                    currentImage === image.url
                      ? "selected-thumbnail thumbnail-container"
                      : "thumbnail-container"
                  }
                >
                  <img
                    className="image-gallery-thumb"
                    src={image.thumbnail_url}
                    onClick={() => changeImage(image.url)}
                  />
                </div>
              );
            }
          })
        : null}
      <i
        className="fa fa-chevron-down fa-2x gallery-arrow"
        onClick={() => {
          updateTopIndex("down");
        }}
        style={{
          visibility:
            images.length > 7 && topIndex + 7 < images.length
              ? "visible"
              : "hidden"
        }}
      />
    </div>
  );
};

export default ImageGallery;
