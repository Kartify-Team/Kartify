import {connect} from 'react-redux';
import OtherItems from '../../components/OtherItems/index.jsx';
import getRelatedProducts from '../../actions/creators/getRelatedProducts.js';
import getRelatedProductsStyles from '../../actions/creators/getRelatedProductsStyles.js';

const mapStateToProps = (store) => ({
  relatedProducts: store.otherItems.relatedProducts,
  relatedProductsStyles: store.otherItems.relatedProductsStyles,
  myOutfit: ['product 1', null, 'product 2', 'product 3']
});

const mapDispatchToProps = (dispatch) => ({
  getRelatedProducts: (id) => {
    dispatch(getRelatedProducts(id))
  },
  getRelatedProductsStyles: (id) => {
    dispatch(getRelatedProductsStyles(id))
  },
  getMyOutfit: () => {
    dispatch(() => console.log('get outfit!')) // TODO: CREATE ACTION
  }
});

const OtherItemsContainer = connect(mapStateToProps, mapDispatchToProps)(OtherItems);

export default OtherItemsContainer;