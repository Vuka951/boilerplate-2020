import {combineReducers} from 'redux';
import {locale} from './reducers/locale';
import {users} from './reducers/users';

const rootReducer = combineReducers({
  locale,
  users,
});
export default rootReducer;
