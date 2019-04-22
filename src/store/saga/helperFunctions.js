import apiKey from "./credentials"
import axios from "axios"
const url = "https://newsapi.org/v2/"

export const newHeadlines = () => {
    const request = axios.get(
        `${url}top-headlines?country=us&apiKey=${apiKey}`,
    )
        .then(res => res.data.articles)
        .catch(er => er)
    return request
}

export const newHeadlines_q = query => {
    console.log(query)
    const request = axios.get(
        `${url}everything?q=${query}&apiKey=${apiKey}`,
    )
        .then(res => res.data.articles)
        .catch(er => er)
    return request
}