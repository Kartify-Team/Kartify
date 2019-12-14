import { connect } from 'react-redux';
import App from '../../components/App';
import { changeProduct } from '../../actions/creators/changeProduct';
import { setRatings } from '../../actions/creators/setRatings';
import { setReviewList } from '../../actions/creators/setReviewList';
import { setProductImageInfo } from '../../actions/creators/setProductImageInfo';
import { setProductStyles } from '../../actions/creators/setProductStyles';

const mapStateToProps = state => ({
  productInfo: state.product
});

const mapDispatchToProps = dispatch => ({
  changeProduct: productId => dispatch(changeProduct(productId)),
  setRatings: productId => dispatch(setRatings(productId)),
  setReviewList: productId => dispatch(setReviewList(productId, 1, 2)),
  setProductImageInfo: productId => dispatch(setProductImageInfo(productId)),
  setProductStyles: productId => dispatch(setProductStyles(productId))
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
