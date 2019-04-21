import { SET_TOP_HEADLINES } from "../actions/index"

export const topHeadlineReducer = (state = [], action) => {
    if (action.news !== undefined) {
        if (action.type === SET_TOP_HEADLINES) {
            return [...state, action.news]
        } else {
            return state
        }
    } else {
        return state
    }
}
