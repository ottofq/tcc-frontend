import { takeLatest, put, call, all } from 'redux-saga/effects';

import api from 'services/api';
import { loginSuccess, loginFailure, registerSuccess } from './actions';
import { success, failure } from '../snackbar/actions';

export function* login({ payload }) {
  try {
    const { email, password, history } = payload;

    const result = yield call(api.post, '/login', { email, password });
    const { user, token } = result.data;

    yield put(loginSuccess(user, token));
    yield put(success('Login efetuado com sucesso!'));

    history.push('/dashboard');
  } catch (error) {
    yield put(loginFailure());
    yield put(failure('Erro ao efetuar o login, verifique seus dados!'));
  }
}

export function* register({ payload }) {
  try {
    const { nome, email, password, history } = payload;

    yield call(api.post, '/users', { nome, email, password });
    yield put(registerSuccess());
    yield put(success('Cadastro efetuado com sucesso!'));

    history.push('/');
  } catch (error) {
    yield put(loginFailure());
    yield put(failure('Erro ao efetuar o cadastro, verifique seus dados!'));
  }
}

export default all([
  takeLatest('auth:LOGIN_REQUEST', login),
  takeLatest('auth:REGISTER_REQUEST', register),
]);
