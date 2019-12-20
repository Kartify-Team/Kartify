import {connect} from 'react-redux';
import MyOutfit from '../../components/OtherItems/MyOutfit/index.jsx';
import { changeProduct } from '../../actions/creators/changeProduct.js';
import { modifyMyOutfit } from '../../actions/dispatchers/changeMyOutfit.js';

const mapStateToProps = (store) => ({
  myOutfit: store.otherItems.myOutfit,
  mainProduct: store.product
});

const mapDispatchToProps = (dispatch) => ({
  changeProduct: (id) => {
    dispatch(changeProduct(id));
  },
  changeMyOutfit: (product, outfit, type) => {
    dispatch(modifyMyOutfit(product, outfit, type));
  }
});

const MyOutfitContainer = connect(mapStateToProps, mapDispatchToProps)(MyOutfit);

export default MyOutfitContainer;