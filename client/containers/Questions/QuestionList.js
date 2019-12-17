import { connect } from 'react-redux';
import QuestionList from '../../components/Questions/QuestionList';
import { addQuestionList } from '../../actions/creators/addQuestionList';

const mapStateToProps = (store) => ({
  product: store.product,
  questions: store.questions.list,
  query: store.questions.searchQuery
});

const mapDispatchToProps = dispatch => ({
  addQuestionList: productId => dispatch(addQuestionList(productId))
});

const QuestionListContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionList);
export default QuestionListContainer;
