import { getProductInfo } from '../greenfieldAPI/index.js';
import { getProductStyles } from '../greenfieldAPI/index.js';
import { getProductReviews } from '../greenfieldAPI/index.js';
import { getDefaultStyle } from '../utils/getCoverImage.js';
import { getAverageRating } from '../utils/index.js';

export const getProductsInfo = (ids) => {
  let promises = [];
  for (let currentId of ids) {
    let currentPromise = [];
    currentPromise.push(getProductInfo(currentId));
    currentPromise.push(getProductStyles(currentId));
    currentPromise.push(getProductReviews(currentId));
    promises.push(Promise.all(currentPromise))
  }
  return (
    Promise.all(promises)
      .then(results => {
        let products = [];
        for (let i = 0; i < results.length; i++) {
          let currentResults = results[i];
          let productInfo = currentResults[0].data;
          let defaultStyle = getDefaultStyle(currentResults[1].data);
          let rating = getAverageRating(currentResults[2].data.ratings);
          
          let product = {
            id: productInfo.id,
            name: productInfo.name,
            category: productInfo.category,
            features: productInfo.features,
            defaultPrice: parseInt(defaultStyle.originalPrice),
            salePrice: parseInt(defaultStyle.salePrice),
            coverImage: defaultStyle.url,
            rating: parseInt(rating),
          }; 
          products.push(product);
        }
        return products;
      })
      .catch(error => console.error(error))
  );
};