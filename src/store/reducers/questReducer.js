import { QUEST } from "../actions"

export const questReducer = (state = "", action) => {
    if (action.type === QUEST) {
        return action.quest
    } else {
        return state
    }
}
