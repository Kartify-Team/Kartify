import React from 'react';
import axios from 'axios';
import ProductsCarousel from './ProductsCarousel.jsx';

export default class OtherItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [],
      outfit: []
    };
  }

  componentDidMount() {
    // TODO: CHECK IF THIS IS THE NAME OF THE PROPS
    axios.get(`http://3.134.102.30/products/2/related`)
    .then(({data}) => {
      let productInfoPromises = [];
      data.forEach((id) => {
        productInfoPromises.push(axios.get(`http://3.134.102.30/products/${id}`))
      })
      return Promise.all(productInfoPromises)
    })
    .then(results => {
      let products = [];
      results.forEach((product) => {
        products.push(product.data)
      })
      this.setState({
        relatedProducts: products
      })
    })
    .catch(error => console.error(error))  
  }

  render() {
    return (
      <div className='otherItems'>
        <div className='otherItemsContainer'>
          <ProductsCarousel />
        </div>
      </div>
    )
  }
};