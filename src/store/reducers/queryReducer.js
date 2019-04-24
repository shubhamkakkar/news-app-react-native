import { QUERY, QUERY_SAGA } from "../actions"

let initialState = {
    queryParameter: undefined,
    category: undefined,
    country: undefined
}

export const queryReducer = (state = initialState, action) => {
    if (action.type === QUERY) {
        return action.queryObj
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