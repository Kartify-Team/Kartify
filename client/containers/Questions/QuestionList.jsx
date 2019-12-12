import { connect } from "react-redux";
import QuestionList from "../../components/Questions/QuestionList";
import store from "../../store.js";

const mapStateToProps = (store) => ({
  questions: store.questionsReducer.questions
});

//mapDispatchToProps

const QuestionListContainer = connect(mapStateToProps)(QuestionList);
export default QuestionListContainer;
