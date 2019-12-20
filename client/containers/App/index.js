import { connect } from 'react-redux';
import App from '../../components/App';
import { changeProduct } from '../../actions/creators/changeProduct';
import { setReviewList } from '../../actions/creators/setReviewList';
import { setRatings } from '../../actions/creators/setRatings';


const mapStateToProps = state => ({
  productInfo: state.product,

});

const mapDispatchToProps = dispatch => ({
  changeProduct: productId => dispatch(changeProduct(productId)),
  setRatings: productId => dispatch(setRatings(productId)),
  setReviewList: productId => dispatch(setReviewList(productId, 1, 2))

});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
