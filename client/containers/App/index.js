import { connect } from 'react-redux';
import App from '../../components/App';
import { changeProduct } from '../../actions/creators/changeProduct';
import { setRatings } from '../../actions/creators/setRatings';
import { setProductImageInfo } from '../../actions/creators/setProductImageInfo';

const mapStateToProps = state => ({
  productInfo: state.product
});

const mapDispatchToProps = dispatch => ({
  changeProduct: productId => dispatch(changeProduct(productId)),
  setRatings: productId => dispatch(setRatings(productId)),
  setProductImageInfo: productId => dispatch(setProductImageInfo(productId))
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
