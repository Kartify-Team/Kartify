import { SET_REVIEW_LIST } from '../index';
import { getProductReviews } from '../../greenfieldAPI/reviews';

export const setReviewList = (productId, page, sort) => dispatch => {
  return getProductReviews(productId, page, sort).then(reviews => {
    return dispatch({
      type: SET_REVIEW_LIST,
      reviewList: reviews.data.results
    });
  });
};
