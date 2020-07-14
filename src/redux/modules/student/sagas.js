/* eslint-disable no-underscore-dangle */
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from 'services/api';
import {
  fetchStudentFailure,
  fetchStudentSuccess,
  fetchStudentsFailure,
  fetchStudentsSuccess,
} from './actions';
import { snackBarFailure } from '../snackbar/actions';

function* loadStudent({ payload }) {
  try {
    const { id } = payload;
    const result = yield call(api.get, `/alunos/${id}`);
    yield put(fetchStudentSuccess(result.data));
  } catch (error) {
    yield put(fetchStudentFailure());
    yield put(snackBarFailure('Erro ao carregar dados do aluno!'));
  }
}

function* loadStudents({ payload }) {
  try {
    const { page } = payload;
    const result = yield call(api.get, `/alunos?page=${page}`);

    yield put(
      fetchStudentsSuccess(result.data.result, result.data.total_alunos)
    );
  } catch (error) {
    yield put(fetchStudentsFailure());
    yield put(snackBarFailure('Erro ao carregar lista de alunos!'));
  }
}

export default all([
  takeLatest('student:FETCH_STUDENTS', loadStudents),
  takeLatest('student:FETCH_STUDENT', loadStudent),
]);
