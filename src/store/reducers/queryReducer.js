import { QUERY } from "../actions"

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
