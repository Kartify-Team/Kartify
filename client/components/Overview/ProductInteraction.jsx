import React from "react";
import StyleSelector from "./StyleSelector";
import Cart from "./Cart";
import Stars from "../Reviews/Stars";
import Price from "../Price";

const ProductInteraction = ({
  product,
  average,
  currentStyle,
  changeStyle,
  numReviews
}) => {
  return (
    <div id="product-interaction-container">
      <div id="overview-info">
        <span id="stars-reviews">
          <Stars stars={average || 0} />
          <a id="review-link" href="#reviews-container">
            {numReviews > 0 ? `Read All ${numReviews} Reviews` : null}
          </a>
        </span>
        <h3>{product.category}</h3>
        <h1>{product.name}</h1>
        {!currentStyle ? null : (
          <Price
            originalPrice={currentStyle.original_price}
            salePrice={currentStyle.sale_price}
          />
        )}
        <div id="social-media-buttons">
          <div id="twitter-share">
            <a
              href="https://twitter.com/share?ref_src=twsrc%5Etfw"
              className="twitter-share-button"
              data-text="Check out our awesome product!"
              data-hashtags="#Kartify"
              data-show-count="false"
            >
              Tweet
            </a>
          </div>
          <div
            className="fb-share-button"
            data-href="https://developers.facebook.com/docs/plugins/"
            data-layout="button"
            data-size="small"
          >
            <a
              target="_blank"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
              className="fb-xfbml-parse-ignore"
            >
              Share
            </a>
          </div>
          <div id="pinterest-share">
            <a
              data-pin-do="buttonBookmark"
              href="https://www.pinterest.com/pin/create/button/"
            ></a>
          </div>
        </div>
      </div>
      <StyleSelector
        styles={product.styles}
        changeStyle={changeStyle}
        currentStyle={currentStyle}
      />
      {!currentStyle ? null : <Cart inventory={currentStyle.skus} />}
    </div>
  );
};

export default ProductInteraction;
