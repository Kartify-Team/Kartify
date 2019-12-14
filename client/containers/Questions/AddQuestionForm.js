import { connect } from 'react-redux';
import AddQuestionForm from '../../components/Questions/AddQuestion/AddQuestionForm';
import { addQuestionList } from '../../actions/creators/addQuestionList';
const mapStateToProps = store => ({
    product: store.product,
});

const mapDispatchToProps = dispatch => ({
    addQuestionList: productId => dispatch(addQuestionList(productId))
});
const AddQuestionFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddQuestionForm);
export default AddQuestionFormContainer;
