import { connect } from 'react-redux';
import Reviews from '../../components/Reviews';
import { setCharacteristics } from '../../actions/creators/setCharacteristics';
import { setReviewList } from '../../actions/creators/setReviewList';
import { setTotalRatings } from '../../actions/creators/setTotalRatings';

const mapStateToProps = store => ({
  product: store.product,
  characteristics:
    store.reviews === undefined ? null : store.reviews.characteristics,
  reviews: store.reviews,
  reviewList: store.reviews !== undefined ? store.reviews.reviewList : null,
  totalRatings: store.reviews == undefined ? null : store.reviews.totalRatings
});

const mapDispatchToProps = dispatch => ({
  setCharacteristics: productId => dispatch(setCharacteristics(productId)),
  setTotalRatings: ratings => dispatch(setTotalRatings(ratings)),
  setReviewList: (productId, page, count) =>
    dispatch(setReviewList(productId, page, count))
});

const ReviewsContainer = connect(mapStateToProps, mapDispatchToProps)(Reviews);
export default ReviewsContainer;
