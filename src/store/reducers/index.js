import { combineReducers } from "redux"
import { topHeadlineReducer } from "./newsReducer"
import { stopLoadNews } from "./stopLoadReducer"
import { questReducer } from "./questReducer"
import { queryReducer } from "./queryReducer"
import { RESET_TOP_HEADLINERS } from "../actions";

const appReducer = combineReducers({
    topHeadlineReducer,
    stopLoadNews,
    queryReducer,
    questReducer
})

const rootReducer = (state, action) => {
    if (action.type === RESET_TOP_HEADLINERS) {
        state.topHeadlineReducer = []
    }
    return appReducer(state, action)
}

export default rootReducer


