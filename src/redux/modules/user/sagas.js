import { all, call, takeLatest, put } from 'redux-saga/effects';

import api from 'services/api';
import { editNameAndPassSuccess, editNameAndPassFailure } from './actions';
import { snackBarFailure, snackBarSuccess } from '../snackbar/actions';
import { logout } from '../auth/actions';

export function* editNameAndPass({ payload }) {
  try {
    const { id, nome, oldPassword, newPassword } = payload;

    yield call(api.put, `/users/${id}`, { nome, oldPassword, newPassword });
    yield put(editNameAndPassSuccess());
    yield put(snackBarSuccess('Perfil editado!'));
    yield put(logout());
  } catch (error) {
    yield put(editNameAndPassFailure());
    yield put(snackBarFailure('Erro ao editar perfil,verifique sua senha'));
  }
}

export default all([takeLatest('user:EDIT_NAME_PASS', editNameAndPass)]);
