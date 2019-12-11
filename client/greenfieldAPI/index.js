import axios from 'axios';
import questions from './questions'

const greenfieldRoot = 'http://3.134.102.30'

export default {
  getProductInfo: (id) => {
    return axios.get(`${greenfieldRoot}/products/${id}`)
  },
  getRelatedProducts: (id) => {
    return axios.get(`${greenfieldRoot}/products/${id}/related`)
  },
  getQuestions: (id) => {
    return questions.getQuestions(id)
  }
};