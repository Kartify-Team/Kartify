import { CHANGE_THEME } from '../actions/index'

export default (state = { theme: "light" }, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return { ...state, theme: action.theme };
        default:
            return state;
    }

}