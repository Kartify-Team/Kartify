import Redux from 'redux';
import { ADD_QUESTION_LIST } from '../actions/index'

export default (state = {}, action) => {
    switch (action.type) {
        case ADD_QUESTION_LIST:
            return { ...state, questions: action.questions }
        default:
            return state;
    }
};