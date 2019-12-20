import { SET_TOTAL_REVIEWS } from '../index';

export const setTotalReviews = totalReviews => {
  return {
    type: SET_TOTAL_REVIEWS,
    totalReviews
  };
};
