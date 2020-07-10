import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import snackbar from './snackbar/reducer';

export default combineReducers({
  auth,
  user,
  snackbar,
});
