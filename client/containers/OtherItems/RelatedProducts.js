import {connect} from 'react-redux';
import RelatedProducts from '../../components/OtherItems/Related Products/index.jsx';
import { changeProduct } from '../../actions/creators/changeProduct.js';

const mapStateToProps = (store) => ({
  relatedProducts: store.otherItems.relatedProducts,
  mainProduct: store.product
});

const mapDispatchToProps = (dispatch) => ({
  changeProduct: (id) => {
    dispatch(changeProduct(id));
  }
});

const RelatedProductsContainer = connect(mapStateToProps, mapDispatchToProps)(RelatedProducts);

export default RelatedProductsContainer;