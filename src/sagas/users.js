import {USERS_GET} from '../types';
import {takeEvery, select, call, put} from 'redux-saga/effects';
import {fetchUsers} from '../api/users';
import {setUsers} from '../actions/users';

const getCurrentUsers = (state) => {
  return state.users.users;
};

function* handleGetUsers() {
  const users = yield select(getCurrentUsers);
  console.log(users);
  const newUsers = yield call(fetchUsers, users);
  yield put(setUsers(newUsers));
}

export default function* watchGetUsers() {
  yield takeEvery(USERS_GET, handleGetUsers);
}
