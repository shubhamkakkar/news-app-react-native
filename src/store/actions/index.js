const SET_TOP_HEADLINES = "SET_TOP_HEADLINES"
const STOP_LOAD_NEWS = "STOP_LOAD_NEWS"

const QUERY_SAGA = "QUERY_SAGA"
const QUERY = "QUERY"

const QUEST = "QUEST"

const setTopHeadlines = news => ({
    type: SET_TOP_HEADLINES,
    news

})
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
const querySaga = news_q => ({
    type: QUERY_SAGA,
    news_q
})

const quest = quest => ({
    type: QUEST,
    quest
})

export {
    SET_TOP_HEADLINES,
    setTopHeadlines,
    STOP_LOAD_NEWS,
    stopLoadNews,
    QUERY,
    query,
    QUERY_SAGA,
    querySaga,
    QUEST,
    quest

}
