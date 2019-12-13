import { SET_RATINGS } from '..';
import { getProductRatings } from '../../greenfieldAPI/reviews';

export const setRatings = productId => dispatch => {
  return getProductRatings(productId).then(ratings => {
    return dispatch({
      type: SET_RATINGS,
      ratings
    });
  });
};
