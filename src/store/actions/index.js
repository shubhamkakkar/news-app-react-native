const SET_TOP_HEADLINES = "SET_TOP_HEADLINES"
const STOP_LOAD_NEWS = "STOP_LOAD_NEWS"

const QUERY = "QUERY"

const QUEST = "QUEST"

const RESET_TOP_HEADLINERS = "RESET_TOP_HEADLINERS"

const setTopHeadlines = news => {
    console.log("in actions", news)
    return {
        type: SET_TOP_HEADLINES,
        news
    }
}
const stopLoadNews = () => ({
    type: STOP_LOAD_NEWS
})

const query = query => ({
    type: QUERY,
    queryObj: {
        queryParameter: query.queryParameter,
        category: query.category,
        country: query.country
    }
})

const quest = quest => ({
    type: QUEST,
    quest
})
const resetTopHeadliners = () => {
    console.log("triggered")
    return {
        type: RESET_TOP_HEADLINERS
    }
}

export {
    SET_TOP_HEADLINES,
    setTopHeadlines,
    STOP_LOAD_NEWS,
    stopLoadNews,
    QUERY,
    query,
    QUEST,
    quest,
    RESET_TOP_HEADLINERS,
    resetTopHeadliners
}
