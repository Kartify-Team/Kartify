import {connect} from 'react-redux';
import OtherItems from '../../components/OtherItems/index.jsx';
import getRelatedProducts from '../../actions/dispatchers/getRelatedProducts.js';
import getProductsStyles from '../../actions/dispatchers/getProductsStyles.js';
import getProductsRatings from '../../actions/dispatchers/getProductsRatings.js';
import getMyOutfit from '../../actions/dispatchers/getMyOutfit.js';
import { changeProduct } from '../../actions/creators/changeProduct.js';
import { saveOutfit } from '../../utils/localStorage.js';


const mapStateToProps = (store) => ({
  productInfo: store.product,
  // Related Products
  relatedProducts: store.otherItems.relatedProducts,
  relatedProductsStyles: store.otherItems.relatedProductsStyles,
  relatedProductsRatings: store.otherItems.relatedProductsRatings,
  // My Outfit
  myOutfit: store.otherItems.myOutfit,
  myOutfitStyles: store.otherItems.myOutfitStyles,
  myOutfitRatings: store.otherItems.myOutfitRatings
});

const mapDispatchToProps = (dispatch) => ({
  changeProduct: (id) => {
    dispatch(changeProduct(id));
  },
  getRelatedProducts: (id) => {
    dispatch(getRelatedProducts(id));
  },
  getProductsStyles: (id, type) => {
    dispatch(getProductsStyles(id, type));
  },
  getProductsRatings: (id, type) => {
    dispatch(getProductsRatings(id, type));
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