import changeRelatedProducts from './relatedProducts.js';
import { getProductInfo, getRelatedProductsIds } from '../../greenfieldAPI';

const getRelatedProducts = id => {
  return dispatch => {
    return getRelatedProductsIds(id)
      .then(({ data }) => {
        let productPromises = data.map(id => {
          return getProductInfo(id);
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
