import axios from 'axios';

const greenfieldRoot = 'http://3.134.102.30';

export const getProductRatings = productId => {
  const getReviewMetadata = axios
    .get(`${greenfieldRoot}/reviews/${productId}/meta`)
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
    .get(`${greenfieldRoot}/reviews/${productId}/meta`)
    .then(response => response.data);
};
