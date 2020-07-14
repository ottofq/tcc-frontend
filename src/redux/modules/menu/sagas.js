/* eslint-disable no-underscore-dangle */
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from 'services/api';
import {
  fetchMenusSuccess,
  fetchMenusFailure,
  fetchMenuSuccess,
  fetchMenuFailure,
  fetchMenuAverage,
  fetchMenuAverageSuccess,
  fetchMenuAverageFailure,
  createMenuFailure,
  createMenuSuccess,
  editMenuFailure,
  editMenuSuccess,
  deleteMenuSuccess,
  deleteMenuFailure,
} from './actions';
import { snackBarSuccess, snackBarFailure } from '../snackbar/actions';
import { closeModal } from '../modal/actions';

function* loadMenu({ payload }) {
  try {
    const { id } = payload;
    const result = yield call(api.get, `/cardapio/${id}`);
    yield put(fetchMenuSuccess(result.data));
    yield put(fetchMenuAverage(result.data._id));
  } catch (error) {
    yield put(fetchMenuFailure());
  }
}

function* loadMenus({ payload }) {
  try {
    const { page } = payload;
    const result = yield call(api.get, `/cardapio?page=${page}`);

    yield put(
      fetchMenusSuccess(result.data.result, result.data.total_cardapios)
    );
  } catch (error) {
    yield put(fetchMenusFailure());
    yield put(snackBarFailure('Erro ao carregar os cardápios!'));
  }
}

function* loadMenuAverage({ payload }) {
  try {
    const { id } = payload;
    const result = yield call(api.get, `/cardapio/avg/${id}`);
    yield put(fetchMenuAverageSuccess(result.data));
  } catch (error) {
    yield put(fetchMenuAverageFailure());
  }
}

function* createMenu({ payload }) {
  try {
    const {
      tipo,
      entrada,
      proteina,
      opcao,
      acompanhamento,
      guarnicao,
      sobremesa,
      history,
    } = payload;

    yield call(api.post, '/cardapio', {
      tipo,
      entrada,
      proteina,
      opcao,
      acompanhamento,
      guarnicao,
      sobremesa,
    });
    yield put(createMenuSuccess());
    yield put(snackBarSuccess('Novo cardápio cadastrado!'));

    history.push('/dashboard');
  } catch (error) {
    yield put(createMenuFailure());
    yield put(snackBarFailure('Erro ao cadastrar novo cardápio!'));
  }
}

function* editMenu({ payload }) {
  try {
    const {
      id,
      tipo,
      entrada,
      proteina,
      opcao,
      acompanhamento,
      guarnicao,
      sobremesa,
      history,
    } = payload;

    yield call(api.put, `/cardapio/${id}`, {
      tipo,
      entrada,
      proteina,
      opcao,
      acompanhamento,
      guarnicao,
      sobremesa,
    });
    yield put(editMenuSuccess());
    yield put(snackBarSuccess('Cardápio editado!'));
    history.push('/dashboard/cardapio/listagem');
  } catch (error) {
    yield put(editMenuFailure());
    yield put(snackBarFailure('Erro ao editar o  cardápio!'));
  }
}

function* deleteMenu({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `/cardapio/${id}`);
    yield put(deleteMenuSuccess(id));
    yield put(closeModal());
    yield put(snackBarSuccess('Cardápio excluido!'));
  } catch (error) {
    yield put(deleteMenuFailure());
    yield put(closeModal());
    yield put(snackBarFailure('Erro ao deletar o cardápio!'));
  }
}

export default all([
  takeLatest('menu:FETCH_MENU', loadMenu),
  takeLatest('menu:FETCH_MENUS', loadMenus),
  takeLatest('menu:FETCH_MENU_AVERAGE', loadMenuAverage),
  takeLatest('menu:CREATE_MENU', createMenu),
  takeLatest('menu:EDIT_MENU', editMenu),
  takeLatest('menu:DELETE_MENU', deleteMenu),
]);
