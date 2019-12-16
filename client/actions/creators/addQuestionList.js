import { ADD_QUESTION_LIST } from '..';
import { getQuestions } from '../../greenfieldAPI';

export const addQuestionList = productId => dispatch => {
  return getQuestions(productId).then(questions => {
    questions.forEach((question) =>
      question.answers = Object.values(question.answers)
        .sort((a, b) => b.helpfulness - a.helpfulness)
    )
    return dispatch({
      type: ADD_QUESTION_LIST,
      questions: questions
    });
  });
};
