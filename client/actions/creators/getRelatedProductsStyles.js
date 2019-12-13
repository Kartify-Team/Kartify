import changeRelatedProductsStyles from './relatedProductsStyles.js';
import { getProductStyles, getRelatedProductsIds } from '../../greenfieldAPI';
import getDefaultStyle from '../../utils/getCoverImage.js';

const getRelatedProductsStyles = id => {
  return dispatch => {
    return getRelatedProductsIds(id)
      .then(({ data }) => {
        let productPromises = data.map(id => {
          return getProductStyles(id);
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