import {connect} from 'react-redux';
import OtherItems from '../../components/OtherItems/index.jsx';
import getRelatedProducts from '../../actions/dispatchers/getRelatedProducts.js';
import getRelatedProductsStyles from '../../actions/dispatchers/getRelatedProductsStyles.js';
import getRelatedProductsRatings from '../../actions/dispatchers/getRelatedProductsRatings.js';
import getMyOutfit from '../../actions/dispatchers/getMyOutfit.js';
import { changeProduct } from '../../actions/creators/changeProduct.js';
import { saveOutfit } from '../../utils/localStorage.js'


const mapStateToProps = (store) => ({
  relatedProducts: store.otherItems.relatedProducts,
  relatedProductsStyles: store.otherItems.relatedProductsStyles,
  relatedProductsRatings: store.otherItems.relatedProductsRatings,
  productInfo: store.product,
  myOutfit: store.otherItems.myOutfit
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
    dispatch(getMyOutfit());
  },
  saveOutfit: (id) => {
    dispatch(saveOutfit(id));
  } 
});

const OtherItemsContainer = connect(mapStateToProps, mapDispatchToProps)(OtherItems);

export default OtherItemsContainer;