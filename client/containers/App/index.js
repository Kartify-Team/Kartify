import { connect } from 'react-redux';
import App from '../../components/App';
import { changeProduct } from '../../actions/creators/changeProduct';
import { setRatings } from '../../actions/creators/setRatings';

const mapStateToProps = state => ({
  productInfo: state.product
});

const mapDispatchToProps = dispatch => ({
  changeProduct: productId => dispatch(changeProduct(productId)),
  setRatings: productId => dispatch(setRatings(productId))
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
