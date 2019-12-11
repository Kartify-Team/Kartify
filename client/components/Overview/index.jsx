import React from 'react';
import ProductImage from './ProductImage';
import ProductInteraction from './ProductInteraction';
import ProductDescription from './ProductDescription';

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="overview-container">
        <ProductImage />
        <ProductInteraction />
        <ProductDescription />
      </div>
    );
  }
}
