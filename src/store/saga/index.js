
import { all } from 'redux-saga/effects';

import { setTopHeadlinesSAGA } from "./newsSaga"

export default function* rootSaga() {
    yield setTopHeadlinesSAGA();

}
