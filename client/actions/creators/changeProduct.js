import { CHANGE_PRODUCT } from '..';
import { getProductInfo } from '../../greenfieldAPI';

export const changeProduct = productId => {
  return function thunk(dispatch) {
    return getProductInfo(productId)
      .then(({ data }) => data)
      .then(info =>
        dispatch({
          type: CHANGE_PRODUCT,
          info
        })
      );
  };
};
