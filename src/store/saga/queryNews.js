import { put, call, take, select } from 'redux-saga/effects';
import {
    querySaga, QUERY_SAGA
} from "../actions"
import { newHeadlines_q } from "./helperFunctions"

const getQueryParameter = state => state.queryReducer
const getloadBool = state => state.stopLoadNews

function* handleQuerySaga() {
    const queryParameter = yield select(getQueryParameter)
    console.log(queryParameter)
    const news = yield call(newHeadlines_q, queryParameter)
    yield put(querySaga(news))
}

export function* queryNews() {
    const loadBool = yield select(getloadBool);
    while (!loadBool) {
        yield take(QUERY_SAGA)
        yield call(handleQuerySaga)
    }
}

