import changeRelatedProductsRating from './relatedProductsRatings.js';
import { getProductReviews, getRelatedProductsIds } from '../../greenfieldAPI';
import { getAverageRating } from '../../utils/index.js';

const getRelatedProductsStyles = id => {
  return dispatch => {
    return getRelatedProductsIds(id)
      .then(({ data }) => {
        let uniqueProducts = {};
        let productPromises = [];
        data.forEach((currentId) => {
          if (uniqueProducts[currentId] === undefined && id !== currentId) {
            uniqueProducts[currentId] = currentId;
            productPromises.push(getProductReviews(currentId));
          }
        });
        return Promise.all(productPromises);
      })
      .then(results => {
        let products = results.map(product => {
          let defaultStyle = getAverageRating(product.data.ratings); // TODO: get ratings
          return defaultStyle;
        });
        dispatch(changeRelatedProductsRating(products));
      })
      .catch(error => console.error(error));
  };
};

export default getRelatedProductsStyles;