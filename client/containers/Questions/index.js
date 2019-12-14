import { connect } from 'react-redux';
import Questions from '../../components/Questions';
import { addQuestionList } from '../../actions/creators/addQuestionList';

const mapStateToProps = store => ({
  product: store.product,
  questions: store.questions.list
});

const mapDispatchToProps = dispatch => ({
  addQuestionList: productId => dispatch(addQuestionList(productId))
});

const QuestionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);
export default QuestionsContainer;
