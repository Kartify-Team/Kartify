import { SET_PRODUCT_STYLES } from '..';
import { getProductStyles } from '../../greenfieldAPI';

export const setProductStyles = productId => dispatch => {
  return getProductStyles(productId).then(result => {
    return dispatch({
      type: SET_PRODUCT_STYLES,
      productStyles: result.data
    });
  });
};
