import { SET_CHARACTERISTICS } from '..';
import { getRatingMetadata } from '../../greenfieldAPI/reviews';

export const setCharacteristics = productId => dispatch => {
  return getRatingMetadata(productId).then(metadata => {
    return dispatch({
      type: SET_CHARACTERISTICS,
      characteristics: metadata.characteristics
    });
  });
};
