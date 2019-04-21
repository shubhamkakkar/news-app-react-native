import apiKey from "./credentials"
import axios from "axios"
const url = "https://newsapi.org/v2/"

export default function fetchApi() {
    const request = axios.get(
        `${url}top-headlines?country=us&apiKey=${apiKey}`,
    )
        .then(res => res.data.articles)
        .catch(er => er)
    return request
}