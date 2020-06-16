import {USERS_GET, USERS_SET} from '../types';

export const getUsers = () => ({
  type: USERS_GET,
});

export const setUsers = (data) => ({
  type: USERS_SET,
  payload: data,
});
