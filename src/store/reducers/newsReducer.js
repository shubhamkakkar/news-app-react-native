


import { SET_TOP_HEADLINES } from "../actions/index"

export const topHeadlineReducer = (state = [], { type, news }) => {
    if (news !== undefined) {
        switch (type) {
            case SET_TOP_HEADLINES: {
                return [...state, news]
            }
            default: {
                return state
            }
        }

    } else {
        return state
    }
}
