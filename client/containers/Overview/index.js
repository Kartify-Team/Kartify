import { connect } from 'react-redux';
import Overview from '../../components/Overview';
import { setProductStyles } from '../../actions/creators/setProductStyles';

const mapStateToProps = store => ({
  product: store.product,
  average: store.reviews.ratings === null ? null : store.reviews.ratings.average
});

const mapDispatchToProps = dispatch => ({
  setProductStyles: productId => dispatch(setProductStyles(productId))
});

const OverviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview);
export default OverviewContainer;
