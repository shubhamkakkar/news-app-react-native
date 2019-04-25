
import { all } from 'redux-saga/effects';
import { setTopHeadlinesSAGA } from "./newsSaga"
export default function* rootSaga() {
    // yield all([setTopHeadlinesSAGA(), queryNews()]);
    yield setTopHeadlinesSAGA()
}
