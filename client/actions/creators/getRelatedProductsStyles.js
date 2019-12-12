import changeRelatedProductsStyles from './relatedProductsStyles.js';
import { getProductStyles, getRelatedProductsIds } from '../../greenfieldAPI';

const getRelatedProducts = id => {
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
          console.log(product)
          let newProduct = {
            id: product.data.product_id,
            imageUrl: product.data.results[0].photos[0].thumbnail_url,
            price: product.data.results[0].original_price,
            salePrice: product.data.results[0].sale_price
          };
          console.log(newProduct)
          product.data.results.forEach((style) => {
            if (style['default?'] === 1 && (style.photos[0].thumbnail_url !== null)) {
              newProduct.imageUrl = style.photos[0].thumbnail_url;
              newProduct.price = style.original_price;
              newProduct.salePrice = style.sale_price;
            }
          });
          return newProduct;
        });
        dispatch(changeRelatedProductsStyles(products));
      })
      .catch(error => console.error(error));
  };
};

export default getRelatedProducts;