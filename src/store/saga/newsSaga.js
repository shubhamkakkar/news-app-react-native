import { put, call, take, select } from 'redux-saga/effects';
import {
    SET_TOP_HEADLINES, setTopHeadlines
} from "../actions"
import { newHeadlines } from "./helperFunctions"

const getloadBool = state => state.stopLoadNews

function* handleTopHeadlines() {
    const news = yield call(newHeadlines)
    yield put(setTopHeadlines(news))
}

export function* setTopHeadlinesSAGA() {
    const loadBool = yield select(getloadBool);
    while (!loadBool) {
        yield take(SET_TOP_HEADLINES)
        yield call(handleTopHeadlines)
    }
}

