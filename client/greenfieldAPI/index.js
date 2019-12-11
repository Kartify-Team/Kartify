import axios from 'axios';
import { getProductRatings } from './reviews.js';

const greenfieldRoot = 'http://3.134.102.30';

export default {
  getProductInfo: id => {
    return axios.get(`${greenfieldRoot}/products/${id}`);
  },
  getRelatedProductsIds: id => {
    return axios.get(`${greenfieldRoot}/products/${id}/related`);
  },
  getRelatedProductsInfo: function(id) {
    return (
      this.getRelatedProductsIds(id)
      .then(({data}) => {
        let productInfoPromises = [];
        data.forEach((id) => {
          productInfoPromises.push(this.getProductInfo(id))
        })
        return Promise.all(productInfoPromises)
      })
      .then(results => {
        let products = [];
        results.forEach((product) => {
          products.push(product.data)
        })
        return products;
      })
      .catch(error => console.error(error))
    )
  },
  getQuestions: productId => {
    return axios.get(`${greenfieldRoot}/qa/${productId}`)
      .then(({ data }) => data)
      .catch((err) => console.log(err))

  },
  getAnswers: questionId => {
    return axios.get(`${greenfieldRoot}/qa/${questionId}/answers`);
  }
};
