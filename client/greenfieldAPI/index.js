import axios from 'axios';
import questions from './questions';
import { getProductRatings } from './reviews.js';

const greenfieldRoot = 'http://3.134.102.30';

export default {
  getProductInfo: id => {
    return axios.get(`${greenfieldRoot}/products/${id}`);
  },
  getRelatedProducts: id => {
    return axios.get(`${greenfieldRoot}/products/${id}/related`);
  },
  getQuestions: id => questions.getQuestions(id),
  getReviewInfo: id => getProductRatings(id)
};
