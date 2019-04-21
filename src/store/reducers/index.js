import { combineReducers } from "redux"

import { topHeadlineReducer } from "./newsReducer"
import { stopLoadNews } from "./stopLoadReducer"
const rootReducer = combineReducers({
    topHeadlineReducer,
    stopLoadNews
})

export default rootReducer