import { connect } from "react-redux";
import Questions from "../../components/Questions";
import store from "../../store.js";

const mapStateToProps = (store) => ({ product: store.product });

//mapDispatchToProps

const QuestionsContainer = connect(mapStateToProps)(Questions);
export default QuestionsContainer;
