import { takeLatest, put, call, all } from 'redux-saga/effects';

import api from 'services/api';
import { loginSuccess, loginFailure } from './actions';

export function* login({ payload }) {
  try {
    const { email, password, history } = payload;

    const result = yield call(api.post, '/login', { email, password });
    const { user, token } = result.data;

    yield put(loginSuccess(user, token));
    history.push('/dashboard');
  } catch (error) {
    yield put(loginFailure());
  }
}

export default all([takeLatest('auth:LOGIN_REQUEST', login)]);
