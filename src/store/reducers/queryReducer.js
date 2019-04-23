import { QUERY, QUERY_SAGA } from "../actions"

export const queryReducer = (state = [], action) => {
    if (action.type === QUERY) {
        return [...state, ...action.query]
    } else {
        return state
    }
}
export const queryNewsReducer = (state = [], action) => {
    if (action.news_q !== undefined) {
        if (action.type === QUERY_SAGA) {
            return [...state, action.news_q]
        } else {
            return state
        }
    } else {
        return state
    }
}