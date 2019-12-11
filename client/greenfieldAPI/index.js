import axios from 'axios';
import { getProductRatings } from './reviews.js';

const greenfieldRoot = 'http://3.134.102.30';

export default {
  getProductInfo: id => {
    return axios.get(`${greenfieldRoot}/products/${id}`);
  },
  getRelatedProducts: id => {
    return axios.get(`${greenfieldRoot}/products/${id}/related`);
  },
  getProductStyles: id => {
    return axios.get(`${greenfieldRoot}/products/${id}/styles`);
  },

  getQuestions: (productId) => {
    return axios.get(`${greenfieldRoot}/qa/${productId}`)
      .then(({ data }) => data.results)
      .catch((err) => console.log(err))
  },
  getAnswers: questionId => {
    return axios.get(`${greenfieldRoot}/qa/${questionId}/answers`);
  }
};
