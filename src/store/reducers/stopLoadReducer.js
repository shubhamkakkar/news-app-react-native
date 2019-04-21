import { STOP_LOAD_NEWS } from "../actions"

export const stopLoadNews = (state = false, action) => {
    if (action.type === STOP_LOAD_NEWS) {
        return true
    } else {
        return state
    }
}
