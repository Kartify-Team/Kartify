import changeRelatedProductsRating from '../creators/relatedProductsRatings.js';
import changeMyOutfitRatings from '../creators/myOutfitRatings.js';
import { getProductReviews } from '../../greenfieldAPI';
import { getAverageRating } from '../../utils/index.js';

const getProductsRatings = (products, type) => {
  return dispatch => {
    let ratingsPromises = products.map((product) => {
      if (product === null) {
        return;
      } else {
        return getProductReviews(product.id);
      }
    });
    return Promise.all(ratingsPromises)
      .then(results => {
        let products = results.map(product => {
          if (product) {
            return getAverageRating(product.data.ratings);
          }
        });
        if (type === 'relatedProducts') {
          dispatch(changeRelatedProductsRating(products));
        } else if (type === 'myOutfit') {
          dispatch(changeMyOutfitRatings(products));
        }
      })
      .catch(error => console.error(error));
  };
};

export default getProductsRatings;