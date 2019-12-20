import { connect } from 'react-redux';
import App from '../../components/App';
import { changeProduct } from '../../actions/creators/changeProduct';
import { setReviewList } from '../../actions/creators/setReviewList';
import { setRatings } from '../../actions/creators/setRatings';
import { getRelatedProducts } from '../../actions/dispatchers/getRelatedProducts';
import { getMyOutfit } from '../../actions/dispatchers/getMyOutfit.js';
import { setProductStyles } from '../../actions/creators/setProductStyles';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  changeProduct: productId => dispatch(changeProduct(productId)),
  setRatings: productId => dispatch(setRatings(productId)),
  setReviewList: productId => dispatch(setReviewList(productId, 1, 2)),
  getRelatedProducts: productId => dispatch(getRelatedProducts(productId)),
  setProductStyles: productId => dispatch(setProductStyles(productId)),
  getMyOutfit: () => dispatch(getMyOutfit())
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
