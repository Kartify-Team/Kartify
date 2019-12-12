import { connect } from 'react-redux';
import App from '../../components/App';
import { changeProduct } from '../../actions/creators/changeProduct';

const mapStateToProps = state => ({
  productInfo: state.product.info
});

const mapDispatchToProps = dispatch => ({
  changeProduct: productId => dispatch(changeProduct(productId))
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
