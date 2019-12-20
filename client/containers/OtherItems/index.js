import {connect} from 'react-redux';
import OtherItems from '../../components/OtherItems/index.jsx';
import { changeProduct } from '../../actions/creators/changeProduct.js';

const mapStateToProps = (store) => ({
  productInfo: store.product
});

const mapDispatchToProps = (dispatch) => ({
  changeProduct: (id) => {
    dispatch(changeProduct(id));
  }
});

const OtherItemsContainer = connect(mapStateToProps, mapDispatchToProps)(OtherItems);

export default OtherItemsContainer;