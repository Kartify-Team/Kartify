import changeRelatedProducts from '../creators/relatedProducts.js';
import { getProductInfo, getRelatedProductsIds } from '../../greenfieldAPI';

const getRelatedProducts = id => {
  return dispatch => {
    return getRelatedProductsIds(id)
      .then(({ data }) => {
        let uniqueProducts = {};
        let productPromises = [];
        data.forEach((currentId) => {
          if (uniqueProducts[currentId] === undefined && id !== currentId) {
            uniqueProducts[currentId] = currentId;
            productPromises.push(getProductInfo(currentId));
          }
        });
        return Promise.all(productPromises);
      })
      .then(results => {
        let products = results.map(product => {
          return product.data;
        });
        dispatch(changeRelatedProducts(products));
      })
      .catch(error => console.error(error));
  };
};

export default getRelatedProducts;
