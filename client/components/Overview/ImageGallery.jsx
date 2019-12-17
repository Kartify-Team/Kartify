import React, { useState, useEffect } from "react";

const ImageGallery = ({ images, currentImage, changeImage }) => {
  const [topIndex, setTopIndex] = useState(0);

  const changeImageGalleryIndex = (type = "down") => {
    if (type === "down") {
      if (topIndex + 8 < images.length) {
        setTopIndex(topIndex + 1);
      }
    } else {
      if (topIndex > 0) {
        setTopIndex(topIndex - 1);
      }
    }
  };

  useEffect(() => {
    setTopIndex(0);
  }, [images]);

  return (
    <div id="image-gallery">
      <i
        className="fa fa-chevron-up fa-2x gallery-arrow"
        onClick={() => {
          changeImageGalleryIndex("up");
        }}
        style={{
          visibility: images.length > 7 && topIndex > 0 ? "visible" : "hidden"
        }}
      />
      {images.length > 1
        ? images.map((image, idx) => {
            if (idx >= topIndex && idx < topIndex + 7) {
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
          changeImageGalleryIndex("down");
        }}
        style={{
          visibility:
            images.length > 7 && topIndex + 8 < images.length
              ? "visible"
              : "hidden"
        }}
      />
    </div>
  );
};

export default ImageGallery;
