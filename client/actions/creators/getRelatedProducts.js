import changeRelatedProducts from './relatedProducts.js';
import { getProductInfo, getRelatedProductsIds } from '../../greenfieldAPI';

const getRelatedProducts = id => {
  return dispatch => {
    return getRelatedProductsIds(id)
      .then(({ data }) => {
        let uniqueProducts = {};
        let productPromises = [];
        data.forEach((id) => {
          if (uniqueProducts[id] === undefined) {
            uniqueProducts[id] = id;
            productPromises.push(getProductInfo(id));
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
