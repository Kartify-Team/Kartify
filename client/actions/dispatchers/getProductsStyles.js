import changeRelatedProductsStyles from '../creators/relatedProductsStyles.js';
import changeMyOutfitStyles from '../creators/myOutfitStyles.js';
import { getProductStyles } from '../../greenfieldAPI';
import getDefaultStyle from '../../utils/getCoverImage.js';

const getProductsStyles = (products, type) => {
  return dispatch => {
    let stylesPromises = products.map((product) => {
      if (product === null) {
        return;
      } else {
        return getProductStyles(product.id);
      }
    });
    return Promise.all(stylesPromises)
      .then(results => {
        let products = results.map(product => {
          if (product) {
            return getDefaultStyle(product.data);
          }
        });
        if (type === 'relatedProducts') {
          dispatch(changeRelatedProductsStyles(products));
        } else if (type === 'myOutfit') {
          dispatch(changeMyOutfitStyles(products));
        }
      })
      .catch(error => console.error(error));
  };
};

export default getProductsStyles;