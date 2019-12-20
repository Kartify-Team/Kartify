import changeRelatedProducts from '../creators/relatedProducts.js';
import { getRelatedProductsIds } from '../../greenfieldAPI';
import {getProductsInfo} from '../../utils/getProductInfo.js';

export const getRelatedProducts = id => {
  return dispatch => {
    return getRelatedProductsIds(id)
      .then(ids => {
        return getProductsInfo(ids);
      })
      .then(products => {
        dispatch(changeRelatedProducts(products));
      })
      .catch(error => console.error(error));
  };
};