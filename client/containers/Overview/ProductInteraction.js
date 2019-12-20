import { connect } from 'react-redux';
import ProductInteraction from '../../components/Overview/ProductInteraction';

const mapStateToProps = store => ({
  product: store.product,
  average: !store.reviews.ratings ? 0 : store.reviews.ratings.average,
  reviewList: store.reviews !== undefined ? store.reviews.reviewList : null
});

const mapDispatchToProps = dispatch => ({});

const ProductInteractionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductInteraction);
export default ProductInteractionContainer;
