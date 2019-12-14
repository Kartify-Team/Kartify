import { connect } from 'react-redux';
import QuestionList from '../../components/Questions/QuestionList';
// import store from '../../store.js';

const mapStateToProps = (store) => ({
  product: store.product,
  questions: store.questions.list,
  query: store.questions.searchQuery
});

//mapDispatchToProps

const QuestionListContainer = connect(mapStateToProps)(QuestionList);
export default QuestionListContainer;
