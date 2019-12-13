import { SET_PRODUCT_IMAGE_INFO } from '..';
import getImage from '../../utils/getCoverImage';
import { getProductStyles } from '../../greenfieldAPI';

export const setProductImageInfo = productId => dispatch => {
  return getProductStyles(productId).then(result => {
    let imageObj = getImage(result.data);
    return dispatch({
      type: SET_PRODUCT_IMAGE_INFO,
      imageInfo: imageObj
    });
  });
};
