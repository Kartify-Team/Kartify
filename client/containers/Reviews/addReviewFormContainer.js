import { connect } from 'react-redux';
import { setReviewList } from '../../actions/creators/setReviewList';
import AddReviewForm from '../../components/Reviews/addReview/AddReviewForm';

const mapStateToProps = store => ({
  id: store.product.id,
  characteristics:
    store.reviews === undefined ? null : store.reviews.characteristics
});

const mapDispatchToProps = dispatch => ({
  setReviewList: (productId, page, sort) =>
    dispatch(setReviewList(productId, page, sort))
});

const AddReviewFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReviewForm);

export default AddReviewFormContainer;
