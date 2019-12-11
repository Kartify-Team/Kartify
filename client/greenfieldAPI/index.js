import axios from 'axios';

const greenfieldRoot = 'http://3.134.102.30';

export default {
  getProductInfo: (id) => {
    return axios.get(`${greenfieldRoot}/products/${id}`);
  },
  getRelatedProducts: (id) => {
    return axios.get(`${greenfieldRoot}/products/${id}/related`);
  },
  getQuestions: (productId) => {
    return axios.get(`${greenfieldRoot}/qa/${productId}`)
      .then(({ data }) => data)
      .catch((err) => console.log(err))
  },
  getAnswers: (questionId) => {
    return axios.get(`${greenfieldRoot}/qa/${questionId}/answers`);
  }
};