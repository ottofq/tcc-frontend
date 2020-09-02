/* eslint-disable no-underscore-dangle */
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from 'services/api';
import { fetchChartsSuccess, fetchChartsFailure } from './actions';
import { snackBarFailure } from '../snackbar/actions';

function* loadCharts() {
  try {
    const routes = [
      'alergias',
      'patologias',
      'bolsistas',
      'frequencia',
      'tiporefeicao',
      'nivelatividadefisica',
      'vegetariano',
      'consumobebidaalcoolica',
      'tabagista',
      'avaliacao',
      'avaliacaogeral',
      'melhoriasru',
    ];

    const [
      alergia,
      patologia,
      bolsista,
      frequencia,
      tipoRefeicao,
      nivelAtividadeFisica,
      vegetariano,
      consumoBebidaAlcoolica,
      tabagista,
      avaliacaoRefeicao,
      avaliacaoGeral,
      melhoriaRU,
    ] = yield all(routes.map(route => call(api.get, `/estatisticas/${route}`)));

    yield put(
      fetchChartsSuccess(
        [
          alergia.data,
          patologia.data,
          bolsista.data,
          frequencia.data,
          tipoRefeicao.data,
          nivelAtividadeFisica.data,
          vegetariano.data,
          consumoBebidaAlcoolica.data,
          tabagista.data,
          avaliacaoRefeicao.data,
          avaliacaoGeral.data,
          melhoriaRU.data,
        ],
        alergia.data.total_alunos
      )
    );
  } catch (error) {
    yield put(fetchChartsFailure());
    yield put(snackBarFailure('Erro ao carregar os gráficos!'));
  }
}

export default all([takeLatest('chart:FETCH_CHARTS', loadCharts)]);
