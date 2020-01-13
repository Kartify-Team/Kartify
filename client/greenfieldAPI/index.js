import axios from 'axios';
// import { getProductRatings } from './reviews.js';
export const root = {
  products: 'http://ec2-18-216-94-171.us-east-2.compute.amazonaws.com:3000',
  // products: 'http://3.134.102.30',
  reviews: 'http://3.134.102.30',
  qna: 'http://3.134.102.30'
};

export const getProductInfo = id => {
  return axios.get(`${root.products}/products/${id}`);
};

export const getRelatedProductsIds = id => {
  return axios.get(`${root.products}/products/${id}/related`)
    .then(({ data }) => {
      let uniqueProducts = {};
      data.forEach((currentId) => {
        if (uniqueProducts[currentId] === undefined && parseInt(id) !== currentId) {
          uniqueProducts[currentId] = currentId;
        }
      });
      return Object.values(uniqueProducts);
    })
    .catch(error => console.error(error));
};

export const getProductReviews = id => {
  return axios.get(`${root.reviews}/reviews/${id}/meta`);
};

export const getProductStyles = id => {
  return axios.get(`${root.products}/products/${id}/styles`);
};

export const getQuestions = productId => {
  return axios
    .get(`${root.qna}/qa/${productId}?count=100000`)
    .then(({ data }) => data.results)
    .then((questions) => questions.sort((a, b) => b.question_helpfulness - a.question_helpfulness))

    .catch(err => console.log(err));
};

// export const getAnswers = questionId => {
//   return axios.get(`${greenfieldRoot}/qa/${questionId}/answers`);
// };

export const submitAQuestion = (body, form, product, question) => {
  if (form === 'addQuestion') {
    return axios
      .post(`${greenfieldRoot}/qa/${product.id}`, body);
  } else {
    return axios
      .post(`${root.qna}/qa/${question.question_id}/answers`, body);
  }
};

export const markAsHelpful = (id, type = 'question') => {
  return axios.put(`${root.qna}/qa/${type}/${id}/helpful`);
};

export const reportPost = (id, type = 'answer') => {
  return axios.put(`${root.qna}/qa/${type}/${id}/report`);
};