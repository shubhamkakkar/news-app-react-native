
const SET_TOP_HEADLINES = "SET_TOP_HEADLINES"
const STOP_LOAD_NEWS = "STOP_LOAD_NEWS"

const setTopHeadlines = news => ({
    type: SET_TOP_HEADLINES,
    news

})
const stopLoadNews = () => ({
    type: STOP_LOAD_NEWS
})
export {
    SET_TOP_HEADLINES,
    setTopHeadlines,
    STOP_LOAD_NEWS,
    stopLoadNews
}
