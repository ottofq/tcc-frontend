import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import menu from './menu/sagas';
import news from './news/sagas';
import comments from './comments/sagas';

export default function* rootSaga() {
  return yield all([auth, menu, news, comments]);
}
