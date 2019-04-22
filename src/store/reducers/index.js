import { combineReducers } from "redux"

import { topHeadlineReducer } from "./newsReducer"
import { stopLoadNews } from "./stopLoadReducer"
import { queryNewsReducer, queryReducer } from "./queryReducer"
const rootReducer = combineReducers({
    topHeadlineReducer,
    stopLoadNews,
    queryNewsReducer,
    queryReducer
})

export default rootReducer