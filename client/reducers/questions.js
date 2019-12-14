// import Redux from 'redux';
import { ADD_QUESTION_LIST } from '../actions/index';
import { SEARCH_QUESTIONS } from '../actions/index'

export default (state = { list: [], searchQuery: "" }, action) => {
  switch (action.type) {
    case ADD_QUESTION_LIST:
      return { ...state, list: action.questions };
    case SEARCH_QUESTIONS:
      return { ...state, searchQuery: action.query };
    default:
      return state;
  }
};