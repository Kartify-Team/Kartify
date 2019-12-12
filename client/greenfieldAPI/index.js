import axios from 'axios';
import { getProductRatings } from './reviews.js';

const greenfieldRoot = 'http://3.134.102.30';

export const getProductInfo = id => {
  return axios.get(`${greenfieldRoot}/products/${id}`);
};

export const getRelatedProductsIds = id => {
  return axios.get(`${greenfieldRoot}/products/${id}/related`);
};

export const getProductStyles = id => {
  return axios.get(`${greenfieldRoot}/products/${id}/styles`);
};

export const getQuestions = productId => {
  return axios
    .get(`${greenfieldRoot}/qa/${productId}?count=20`)
    .then(({ data }) => data.results)
    .catch(err => console.log(err));
};

export const getAnswers = questionId => {
  return axios.get(`${greenfieldRoot}/qa/${questionId}/answers`);
};
