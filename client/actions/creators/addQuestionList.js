import { ADD_QUESTION_LIST } from "..";
import greenfieldAPI from '../../greenfieldAPI'

export const addQuestionList = (productId) => (
    (dispatch) => {
        return greenfieldAPI
            .getQuestions(productId)
            .then((questions) => {
                return dispatch({
                    type: ADD_QUESTION_LIST,
                    questions: questions
                })
            });
    })



