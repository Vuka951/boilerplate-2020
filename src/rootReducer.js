import {combineReducers} from 'redux';
import user from './reducers/user';
import {locale} from './reducers/locale';

const rootReducer = combineReducers({
  user,
  locale,
});
export default rootReducer;
