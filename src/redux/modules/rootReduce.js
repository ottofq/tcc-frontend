import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import snackbar from './snackbar/reducer';
import menu from './menu/reducer';
import news from './news/reducer';
import student from './student/reducer';
import comments from './comments/reducer';
import modal from './modal/reducer';

export default combineReducers({
  auth,
  user,
  snackbar,
  menu,
  news,
  student,
  comments,
  modal,
});
