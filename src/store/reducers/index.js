import { combineReducers } from "redux"
import { topHeadlineReducer } from "./newsReducer"
import { stopLoadNews } from "./stopLoadReducer"
import { questReducer } from "./questReducer"
import { queryReducer } from "./queryReducer"

const rootReducer = combineReducers({
    topHeadlineReducer,
    stopLoadNews,
    queryReducer,
    questReducer
})

export default rootReducer