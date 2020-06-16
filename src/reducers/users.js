import {USERS_SET} from '../types';

export function users(state = {users: []}, action) {
  switch (action.type) {
  case USERS_SET:
    return {...state, users: action.payload};
  default:
    return state;
  }
}
