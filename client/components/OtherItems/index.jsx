import React from 'react';
import axios from 'axios';
import ProductsCarousel from './ProductsCarousel.jsx';
import {
  getProductInfo,
  getRelatedProducts
} from '../../greenfieldAPI/index.js';

class OtherItems extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   relatedProducts: [],
    //   outfit: []
    // };
  }

  // componentDidMount() {
  //   // TODO: change hardcoded id
  //   getRelatedProducts(2)
  //   .then(({data}) => {
  //     let productInfoPromises = [];
  //     data.forEach((id) => {
  //       productInfoPromises.push(getProductInfo(id))
  //     })
  //     return Promise.all(productInfoPromises)
  //   })
  //   .then(results => {
  //     let products = [];
  //     results.forEach((product) => {
  //       products.push(product.data)
  //     })
  //     this.setState({
  //       relatedProducts: products
  //     })
  //   })
  //   .catch(error => console.error(error))
  // }

  render() {
    return (
      <div className="otherItems">
        <div className="otherItemsContainer">
          <ProductsCarousel products={this.props.myOutfit} />
        </div>
      </div>
    );
  }
}

export default OtherItems;
