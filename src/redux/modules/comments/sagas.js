/* eslint-disable no-underscore-dangle */
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from 'services/api';
import { fetchMenuCommentsSuccess, fetchMenuCommentsFailure } from './actions';

function* loadMenuComments({ payload }) {
  try {
    const { id, skip, limit } = payload;

    const result = yield call(
      api.get,
      `/cardapio/${id}/comentarios?skip=${skip}&limit=${limit}`
    );

    yield put(
      fetchMenuCommentsSuccess(
        result.data.avaliacoes,
        result.data.totalAvaliacoes
      )
    );
  } catch (error) {
    yield put(fetchMenuCommentsFailure());
  }
}

export default all([takeLatest('menu:FETCH_MENU_COMMENTS', loadMenuComments)]);
