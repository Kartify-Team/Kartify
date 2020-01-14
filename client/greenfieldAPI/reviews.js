import axios from 'axios';

const root = {}
axios.get('/env')
  .then(({ data }) =>
    root = {
      product: data.products,
      reviews: data.reviews,
      questions: data.questions
    })
// const greenfieldRoot = 'http://3.134.102.30';

export const getProductRatings = productId => {
  const getReviewMetadata = axios
    .get(`${root.reviews}/reviews/${productId}/meta`)
    .then(response => response.data.ratings);

  return getReviewMetadata.then(ratings => {
    const oneCount = ratings[1] || 0;
    const twoCount = ratings[2] || 0;
    const threeCount = ratings[3] || 0;
    const fourCount = ratings[4] || 0;
    const fiveCount = ratings[5] || 0;
    const sum = oneCount + twoCount + threeCount + fourCount + fiveCount;

    let average = (
      (oneCount +
        twoCount * 2 +
        threeCount * 3 +
        fourCount * 4 +
        fiveCount * 5) /
      sum
    ).toFixed(2);

    if (isNaN(average)) average = 0;

    return {
      ...ratings,
      average
    };
  });
};

export const getRatingMetadata = productId => {
  return axios
    .get(`${root.reviews}/reviews/${productId}/meta`)
    .then(response => response.data);
};

export const getProductReviews = (productId, page, sort) => {
  return axios.get(`${root.reviews}/reviews/${productId}/list`, {
    params: {
      page,
      count: 1000000,
      sort
    }
  });
};

export const postReview = (
  productId,
  rating,
  summary,
  body,
  recommend,
  name,
  email,
  characteristics,
  photos = []
) => {
  return axios.post(`${root.reviews}/reviews/${productId}`, {
    rating,
    summary,
    body,
    recommend,
    name,
    email,
    photos,
    characteristics
  });
};

export const incrementHelpfulness = reviewId => {
  return axios.put(`${greenfieldRoot}/reviews/helpful/${reviewId}`);
};

export const reportReview = reviewId => {
  return axios.put(`${greenfieldRoot}/reviews/report/${reviewId}`);
};
