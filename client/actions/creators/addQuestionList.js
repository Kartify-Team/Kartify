import { ADD_QUESTION_LIST } from '..';
import { getQuestions } from '../../greenfieldAPI';

export const addQuestionList = productId => dispatch => {
  return getQuestions(productId).then(questions => {
    return dispatch({
      type: ADD_QUESTION_LIST,
      questions: questions
    });
  });
};
