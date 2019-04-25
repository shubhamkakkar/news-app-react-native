import apiKey from "./credentials"
import axios from "axios"
let url = "https://newsapi.org/v2/"

export const newHeadlines = obj => {
    let querySet = undefined
    const quest = obj[1]
    const { queryParameter, category, country } = obj[0]
    if (category && country && queryParameter) {
        querySet = `category=${category}&country=${country}&q=${queryParameter}`
    } else if (category && country && queryParameter === undefined) {
        querySet = `country=${country}&category=${category}`
    } else if (category && queryParameter && country === undefined) {
        querySet = `category=${category}&q=${queryParameter}`
    } else if (country && queryParameter && category === undefined) {
        querySet = `country=${country}&q=${queryParameter}`
    } else if (queryParameter && category === undefined && country === undefined) {
        querySet = `q=${queryParameter}`
    } else if (category && country === undefined && queryParameter === undefined) {
        querySet = `category=${category}`
    } else if (country && queryParameter === undefined && category === undefined) {
        querySet = `country=${country}`
    }

    // news api endpoint - everything only supports q
    if (quest === "everything") {
        querySet = `q=${queryParameter}`
    }
    const request = axios.get(
        `${url}${quest}?${querySet}&apiKey=${apiKey}`,
    )
        .then(res => res.data.articles)
        .catch(er => er)
    return request
}
