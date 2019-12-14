import { connect } from 'react-redux';
import AddQuestionForm from '../../components/Questions/AddQuestion/AddQuestionForm';

const mapStateToProps = store => ({
    product: store.product,
});

const AddQuestionFormContainer = connect(
    mapStateToProps,
    null
)(AddQuestionForm);
export default AddQuestionFormContainer;
