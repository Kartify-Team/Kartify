import React from 'react';

const ProductDescription = ({ product }) => (
  <div id="product-description-container">
    <span id="left-description">
      <h2>{product.slogan}</h2>
      <br />
      <p>{product.description}</p>
    </span>
    <span id="right-description">
      <ul>
        {/* Features List */}
        {product.features.map((feature, idx) => {
          return (
            <li key={`feature-${idx}`}>
              {feature.feature} : {feature.value}
            </li>
          );
        })}
      </ul>
    </span>
  </div>
);

export default ProductDescription;
