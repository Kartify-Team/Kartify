import { connect } from 'react-redux';
import AddForm from '../../components/Questions/AddModal/AddForm';
import { addQuestionList } from '../../actions/creators/addQuestionList';
const mapStateToProps = store => ({
  product: store.product,
});

const mapDispatchToProps = dispatch => ({
  addQuestionList: productId => dispatch(addQuestionList(productId))
});
const AddFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddForm);
export default AddFormContainer;
