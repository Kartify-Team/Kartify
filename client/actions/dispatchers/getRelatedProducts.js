import changeRelatedProducts from '../creators/relatedProducts.js';
import { getRelatedProductsIds } from '../../greenfieldAPI';
import { getProductsInfo } from '../../utils/index.js';

const getRelatedProducts = id => {
  return dispatch => {
    return getRelatedProductsIds(id)
      .then(({ data }) => {
        let uniqueProducts = {};
        data.forEach((currentId) => {
          if (uniqueProducts[currentId] === undefined && id !== currentId) {
            uniqueProducts[currentId] = currentId;
          }
        });
        return getProductsInfo(Object.values(uniqueProducts));
      })
      .then(results => {
        dispatch(changeRelatedProducts(results));
      })
      .catch(error => console.error(error));
  };
};

export default getRelatedProducts;
