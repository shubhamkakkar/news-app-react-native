
import { all } from 'redux-saga/effects';
import { setTopHeadlinesSAGA } from "./newsSaga"
import { queryNews } from "./queryNews"
export default function* rootSaga() {
    yield all([setTopHeadlinesSAGA(), queryNews()]);
}
