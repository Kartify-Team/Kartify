import { SET_TOTAL_RATINGS } from '..';
import { getTotalRatings } from '../../utils/index';

export const setTotalRatings = ratings => ({
  type: SET_TOTAL_RATINGS,
  totalRatings: getTotalRatings(ratings)
});
