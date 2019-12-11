import { ADD_QUESTION_LIST } from "..";
import greenfieldAPI from '../../greenfieldAPI'

export const addQuestionList = (productId) => {

    console.log("line 6")
    return function thunk(dispatch) {
        console.log("thunk")
        return greenfieldAPI
            .getQuestions(productId)
            .then((questions) => {
                console.log("run")
                return dispatch({
                    type: 'ADD_QUESTION_LIST',
                    questions: questions
                })
            });
    }
}


