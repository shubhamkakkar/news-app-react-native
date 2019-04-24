import { combineReducers } from "redux"
import { topHeadlineReducer } from "./newsReducer"
import { stopLoadNews } from "./stopLoadReducer"
import { questReducer } from "./questReducer"
import { queryNewsReducer, queryReducer } from "./queryReducer"

const rootReducer = combineReducers({
    topHeadlineReducer,
    stopLoadNews,
    queryNewsReducer,
    queryReducer,
    questReducer
})

export default rootReducer