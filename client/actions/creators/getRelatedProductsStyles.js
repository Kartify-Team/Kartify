import changeRelatedProductsStyles from './relatedProductsStyles.js';
import { getProductStyles, getRelatedProductsIds } from '../../greenfieldAPI';
import getDefaultStyle from '../../utils/getCoverImage.js';

const getRelatedProductsStyles = id => {
  return dispatch => {
    return getRelatedProductsIds(id)
      .then(({ data }) => {
        let uniqueProducts = {};
        let productPromises = [];
        data.forEach((currentId) => {
          if (uniqueProducts[currentId] === undefined && id !== currentId) {
            uniqueProducts[currentId] = currentId;
            productPromises.push(getProductStyles(currentId));
          }
        });
        return Promise.all(productPromises);
      })
      .then(results => {
        let products = results.map(product => {
          let defaultStyle = getDefaultStyle(product.data);
          return defaultStyle;
        });
        dispatch(changeRelatedProductsStyles(products));
      })
      .catch(error => console.error(error));
  };
};

export default getRelatedProductsStyles;