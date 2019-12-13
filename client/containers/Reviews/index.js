import { connect } from 'react-redux';
import Reviews from '../../components/Reviews';
import { setCharacteristics } from '../../actions/creators/setCharacteristics';

const mapStateToProps = store => ({
  product: store.product,
  characteristics:
    store.ratings === undefined ? null : store.ratings.characteristics,
  ratings: store.ratings,
  reviewList: store.ratings.reviewList
});

const mapDispatchToProps = dispatch => ({
  setCharacteristics: productId => dispatch(setCharacteristics(productId))
});

const ReviewsContainer = connect(mapStateToProps, mapDispatchToProps)(Reviews);
export default ReviewsContainer;
