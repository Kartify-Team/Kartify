import { connect } from "react-redux";
import Questions from "../../components/Questions";
import store from "../../store.js";
import { addQuestionList } from "../../actions/creators/addQuestionList";

const mapStateToProps = (store) => {
  return {
    product: store.product,
    questions: store.questionsReducer.questions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addQuestionList: (productId) => dispatch(addQuestionList(productId))
  };
};

const QuestionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);
export default QuestionsContainer;
