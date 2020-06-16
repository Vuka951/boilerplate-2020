import {LOCALE_CHANGE} from '../types';
import {takeEvery, put} from 'redux-saga/effects';

import {localeSet} from '../actions/locale';

function* handleSetLocale(action) {
  localStorage.boilerLang = action.payload;
  yield put(localeSet(action.payload));
}

export default function* watchSetLocale() {
  yield takeEvery(LOCALE_CHANGE, handleSetLocale);
}
