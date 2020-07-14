import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import menu from './menu/sagas';
import news from './news/sagas';
import student from './student/sagas';
import chart from './chart/sagas';
import comments from './comments/sagas';

export default function* rootSaga() {
  return yield all([auth, user, menu, news, student, chart, comments]);
}
