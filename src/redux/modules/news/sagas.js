/* eslint-disable no-underscore-dangle */
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from 'services/api';
import {
  createNewsFailure,
  createNewsSuccess,
  deleteNewsFailure,
  deleteNewsSuccess,
  editNewsFailure,
  editNewsSuccess,
  fetchNewsFailure,
  fetchNewsSuccess,
  fetchOneNewsFailure,
  fetchOneNewsSuccess,
} from './actions';
import { snackBarSuccess, snackBarFailure } from '../snackbar/actions';
import { closeModal } from '../modal/actions';

function* loadOneNews({ payload }) {
  try {
    const { id } = payload;
    const result = yield call(api.get, `/noticias/${id}`);
    yield put(fetchOneNewsSuccess(result.data));
  } catch (error) {
    yield put(fetchOneNewsFailure());
    yield put(snackBarFailure('Erro ao carregar a notícia!'));
  }
}

function* loadNews({ payload }) {
  try {
    const { page } = payload;
    const result = yield call(api.get, `/noticias?page=${page}`);

    yield put(fetchNewsSuccess(result.data.news, result.data.total_news));
  } catch (error) {
    yield put(fetchNewsFailure());
    yield put(snackBarFailure('Erro ao carregar as notícias!'));
  }
}

function* createNews({ payload }) {
  try {
    const { titulo, descricao, history } = payload;

    yield call(api.post, '/noticias/', {
      titulo,
      descricao,
    });
    yield put(createNewsSuccess());
    yield put(snackBarSuccess('Notícia criada!'));

    history.push('/dashboard/noticias/listagem');
  } catch (error) {
    yield put(createNewsFailure());
    yield put(snackBarFailure('Erro ao crirar nova notícia!'));
  }
}

function* editNews({ payload }) {
  try {
    const { id, titulo, descricao, history } = payload;

    yield call(api.put, `/noticias/${id}`, {
      titulo,
      descricao,
    });
    yield put(editNewsSuccess());
    yield put(snackBarSuccess('Notícia editada!'));
    history.push('/dashboard/noticias/listagem');
  } catch (error) {
    yield put(editNewsFailure());
    yield put(snackBarFailure('Erro ao editar a notícia!'));
  }
}

function* deleteNews({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `/noticias/${id}`);
    yield put(deleteNewsSuccess(id));
    yield put(closeModal());
    yield put(snackBarSuccess('Notícia excluida!'));
  } catch (error) {
    yield put(deleteNewsFailure());
    yield put(closeModal());
    yield put(snackBarFailure('Erro ao excluir a notícia!'));
  }
}

export default all([
  takeLatest('news:FETCH_NEWS', loadNews),
  takeLatest('news:FETCH_ONE_NEWS', loadOneNews),
  takeLatest('news:CREATE_NEWS', createNews),
  takeLatest('news:EDIT_NEWS', editNews),
  takeLatest('news:DELETE_NEWS', deleteNews),
]);
