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
  reviewList
}) => {
  return (
    <div id="product-interaction-container">
      <div id="overview-info">
        <span id="stars-reviews">
          <Stars stars={average || 0} />
          <a id="review-link" href="#reviews-container">
            {!!reviewList && reviewList.length > 0
              ? `Read all ${reviewList.length} reviews`
              : null}
          </a>
        </span>
        <h3>{product.category}</h3>
        <h1>{product.name}</h1>
        {!currentStyle ? null : (
          <Price
            originalPrice={currentStyle.original_price}
            salePrice={currentStyle.sale_price}
            name="description-price"
          />
        )}
        <div id="social-media-buttons">
          <div id="twitter-share">
            <iframe
              id="twitter-widget-0"
              scrolling="no"
              frameBorder="0"
              className="twitter-share-button twitter-share-button-rendered twitter-tweet-button"
              style={{
                visibility: true,
                width: 61 + "px",
                height: 20 + "px"
              }}
              title="Twitter Tweet Button"
              src="https://platform.twitter.com/widgets/tweet_button.69e02060c7c44baddf1b5629549acc0c.en.html#dnt=false&amp;hashtags=%23Kartify&amp;id=twitter-widget-0&amp;lang=en&amp;original_referer=http%3A%2F%2Flocalhost%3A3000%2Fproducts%2F5&amp;size=m&amp;text=Check%20out%20our%20awesome%20product!&amp;time=1576858368245&amp;type=share&amp;url=http%3A%2F%2Flocalhost%3A3000%2Fproducts%2F5"
            ></iframe>
          </div>
          <div
            className="fb-share-button"
            data-href="https://developers.facebook.com/docs/plugins/"
            data-layout="button"
            data-size="small"
          >
            <span
              style={{
                verticalAlign: "bottom",
                width: 67 + "px",
                height: 20 + "px"
              }}
            >
              <iframe
                name="f3225e3ff1c4814"
                width="1000px"
                height="1000px"
                title="fb:share_button Facebook Social Plugin"
                frameBorder="0"
                allow="encrypted-media"
                src="https://www.facebook.com/v5.0/plugins/share_button.php?app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D44%23cb%3Df15498d5666a8a%26domain%3Dlocalhost%26origin%3Dhttp%253A%252F%252Flocalhost%253A3000%252Ff2248b93b40d39%26relation%3Dparent.parent&amp;container_width=43&amp;href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;layout=button&amp;locale=en_US&amp;sdk=joey&amp;size=small"
                style={{ width: 67 + "px", height: 20 + "px" }}
              ></iframe>
            </span>
          </div>
          <div id="pinterest-share">
            <a
              data-pin-do="buttonBookmark"
              href="https://www.pinterest.com/pin/create/button/"
            ></a>
          </div>
        </div>
        <div id="style-text-container">
          <p>
            <span id="style-text">STYLE > </span>
            {!!currentStyle ? currentStyle.name : null}
          </p>
        </div>
      </div>
      <StyleSelector
        styles={product.styles}
        changeStyle={changeStyle}
        currentStyle={currentStyle}
        productName={product.name}
      />
      {!currentStyle ? null : (
        <Cart
          productName={product.name}
          styleName={currentStyle.name}
          inventory={currentStyle.skus}
        />
      )}
    </div>
  );
};

export default ProductInteraction;
