import axios from 'axios';
// import { getProductRatings } from './reviews.js';
const greenfieldRoot = 'http://3.134.102.30';

export const getProductInfo = id => {
  return axios.get(`${greenfieldRoot}/products/${id}`);
};

export const getRelatedProductsIds = id => {
  return axios.get(`${greenfieldRoot}/products/${id}/related`);
};

export const getProductReviews = id => {
  return axios.get(`${greenfieldRoot}/reviews/${id}/meta`);
};

export const getProductStyles = id => {
  return axios.get(`${greenfieldRoot}/products/${id}/styles`);
};

export const getQuestions = productId => {
  return axios
    .get(`${greenfieldRoot}/qa/${productId}?count=100000`)
    .then(({ data }) => data.results)
    .then((questions) => questions.sort((a, b) => b.question_helpfulness - a.question_helpfulness))
    .catch(err => console.log(err));
};

// export const getAnswers = questionId => {
//   return axios.get(`${greenfieldRoot}/qa/${questionId}/answers`);
// };

export const submitAQuestion = (body, form, product, question) => {
  if (form === "addQuestion") {
    return axios
      .post(`${greenfieldRoot}/qa/${product.id}`, body);
  } else {
    return axios
      .post(`${greenfieldRoot}/qa/${question.question_id}/answers`, body);
  }
};

export const markAsHelpful = (id, type = "question") => {
  return axios.put(`${greenfieldRoot}/qa/${type}/${id}/helpful`)
}

export const reportPost = (id, type = "answer") => {
  return axios.put(`${greenfieldRoot}/qa/${type}/${id}/report`)
}