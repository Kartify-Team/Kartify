import {connect} from 'react-redux';
import OtherItems from '../../components/OtherItems/index.jsx';
import getRelatedProducts from '../../actions/creators/getRelatedProducts.js';
import getRelatedProductsStyles from '../../actions/creators/getRelatedProductsStyles.js';
import getRelatedProductsRatings from '../../actions/creators/getRelatedProductsRatings.js';
import { changeProduct } from '../../actions/creators/changeProduct.js';

const mapStateToProps = (store) => ({
  relatedProducts: store.otherItems.relatedProducts,
  relatedProductsStyles: store.otherItems.relatedProductsStyles,
  relatedProductsRatings: store.otherItems.relatedProductsRatings,
  productInfo: store.product,
  myOutfit: ['product 1', null, 'product 2', 'product 3']
});

const mapDispatchToProps = (dispatch) => ({
  changeProduct: (id) => {
    dispatch(changeProduct(id));
  },
  getRelatedProducts: (id) => {
    dispatch(getRelatedProducts(id));
  },
  getRelatedProductsStyles: (id) => {
    dispatch(getRelatedProductsStyles(id));
  },
  getRelatedProductsRatings: (id) => {
    dispatch(getRelatedProductsRatings(id));
  },
  getMyOutfit: () => {
    dispatch(() => console.log('get outfit!')); // TODO: CREATE ACTION
  }
});

const OtherItemsContainer = connect(mapStateToProps, mapDispatchToProps)(OtherItems);

export default OtherItemsContainer;