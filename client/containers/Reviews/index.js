import { connect } from 'react-redux';
import Reviews from '../../components/Reviews';
import { setCharacteristics } from '../../actions/creators/setCharacteristics';
import { setReviewList } from '../../actions/creators/setReviewList';
import { setTotalRatings } from '../../actions/creators/setTotalRatings';
import { toggleFilter } from '../../actions/creators/toggleFilter';
import { setTotalReviews } from '../../actions/creators/setTotalReviews';

const mapStateToProps = store => ({
  product: store.product,
  characteristics:
    store.reviews === undefined ? null : store.reviews.characteristics,
  reviews: store.reviews,
  reviewList: store.reviews !== undefined ? store.reviews.reviewList : null,
  totalRatings: store.reviews === undefined ? null : store.reviews.totalRatings,
  filters: store.reviews && store.reviews.filters ? store.reviews.filters : [],
  totalReviews:
    store.reviews && store.reviews.totalReviews
      ? store.reviews.totalReviews
      : null
});

const mapDispatchToProps = dispatch => ({
  setCharacteristics: productId => dispatch(setCharacteristics(productId)),
  setTotalRatings: ratings => dispatch(setTotalRatings(ratings)),
  setReviewList: (productId, page, count) =>
    dispatch(setReviewList(productId, page, count)),
  toggleFilter: filter => dispatch(toggleFilter(filter)),
  setTotalReviews: totalReviews => dispatch(setTotalReviews(totalReviews))
});

const ReviewsContainer = connect(mapStateToProps, mapDispatchToProps)(Reviews);
export default ReviewsContainer;
