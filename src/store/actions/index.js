const SET_TOP_HEADLINES = "SET_TOP_HEADLINES"
const STOP_LOAD_NEWS = "STOP_LOAD_NEWS"

const QUERY_SAGA = "QUERY_SAGA"
const QUERY = "QUERY"

const setTopHeadlines = news => ({
    type: SET_TOP_HEADLINES,
    news

})
const stopLoadNews = () => ({
    type: STOP_LOAD_NEWS
})

const query = query => ({
    type: QUERY,
    query
})
const querySaga = news_q => ({
    type: QUERY_SAGA,
    news_q
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

}
