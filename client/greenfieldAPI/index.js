import axios from 'axios';
import questions from './questions';

export default {
  getProductInfo: (id) => {
    return axios.get(`http://3.134.102.30/products/${id}`);
  },
  getRelatedProducts: (id) => {
    return axios.get(`http://3.134.102.30/products/${id}/related`);
  },
  getQuestions: (id) => {
    return questions.getQuestions(id);
  }
};