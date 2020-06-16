import {all} from 'redux-saga/effects';

import usersSaga from './sagas/users';
import localeSaga from './sagas/locale';

function* rootSaga() {
  yield all([
    usersSaga(),
    localeSaga(),
  ]);
}

export default rootSaga;
