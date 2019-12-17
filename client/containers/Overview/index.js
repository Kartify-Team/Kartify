import { connect } from 'react-redux';
import Overview from '../../components/Overview';
import { setProductImageInfo } from '../../actions/creators/setProductImageInfo';
import { setProductStyles } from '../../actions/creators/setProductStyles';

const mapStateToProps = store => ({
  product: store.product,
  average: store.reviews.ratings === null ? null : store.reviews.ratings.average
});

const mapDispatchToProps = dispatch => ({
  setProductImageInfo: productId => dispatch(setProductImageInfo(productId)),
  setProductStyles: productId => dispatch(setProductStyles(productId))
});

const OverviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview);
export default OverviewContainer;
