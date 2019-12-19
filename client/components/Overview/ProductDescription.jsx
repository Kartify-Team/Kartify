import React from "react";

const ProductDescription = ({ product }) => (
  <div id="product-description-container">
    <span id="left-description">
      <h2>{product.slogan}</h2>
      <p>{product.description}</p>
    </span>
    <span id="right-description">
      {!product.features ? null : (
        <ul>
          {product.features.map((feature, idx) => {
            return (
              <li key={`feature-${idx}`}>
                ✔ {feature.feature}{" "}
                {feature.value === "null" ? null : `: ${feature.value}`}
              </li>
            );
          })}
        </ul>
      )}
    </span>
  </div>
);

export default ProductDescription;
