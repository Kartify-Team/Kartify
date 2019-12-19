import { ADD_QUESTION_LIST } from '..';
import { getQuestions } from '../../greenfieldAPI';

export const addQuestionList = productId => dispatch => {
  return getQuestions(productId).then(questions => {
    questions.forEach((question) =>
      question.answers = Object.values(question.answers)
        .sort((a, b) => {
          if (b.answerer_name === "Seller" && a.answerer_name !== "Seller") {
            return 1
          } else if (a.answerer_name === "Seller" && b.answerer_name !== "Seller") {
            return -1
          } else {
            return b.helpfulness - a.helpfulness
          }
        })
    );
    return dispatch({
      type: ADD_QUESTION_LIST,
      questions: questions
    });
  });
};
