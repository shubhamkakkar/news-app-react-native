


import { SET_TOP_HEADLINES, RESET_TOP_HEADLINERS } from "../actions/index"

export const topHeadlineReducer = (state = [], action) => {
    if (action.news !== undefined) {
        let news = action.news
        if (news === []) {
            console.log("in here")
            return []
        } else {
            switch (action.type) {
                case SET_TOP_HEADLINES: {
                    console.log(news)
                    return [...state, news]
                }
                default: {
                    return state
                }
            }
        }

    } else {
        return state
    }
}
