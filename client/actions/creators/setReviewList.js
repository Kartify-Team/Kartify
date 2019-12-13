import { SET_REVIEW_LIST } from '../index';
import { getProductReviews } from '../../greenfieldAPI/reviews';

export const setReviewList = (productId, page, count) => dispatch => {
  console.log(productId);
  return getProductReviews(productId, page, count).then(reviews => {
    return dispatch({
      type: SET_REVIEW_LIST,
      reviewList: reviews.data.results
    });
  });
};
