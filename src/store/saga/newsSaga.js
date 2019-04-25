import { put, call, take, select } from 'redux-saga/effects';
import {
    QUERY, setTopHeadlines
} from "../actions"
import { newHeadlines } from "./helperFunctions"

const getloadBool = state => state.stopLoadNews
const queryReducer = state => state.queryReducer
const questReducer = state => state.questReducer

function* handleTopHeadlines(queryObj) {

}

function* handleNews() {
    const QueryObj = yield select(queryReducer);
    const quest = yield select(questReducer);
    const news = yield call(newHeadlines, [QueryObj, quest])
    yield put(setTopHeadlines(news))
}

export function* setTopHeadlinesSAGA() {
    const loadBool = yield select(getloadBool);
    while (!loadBool) {
        yield take(QUERY)
        yield call(handleNews)
    }
}

