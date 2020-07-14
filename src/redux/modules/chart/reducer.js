/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import produce from 'immer';

const intialState = {
  data: [],
  loading: false,
  totalStudents: 0,
};

const chart = (state = intialState, action) => {
  switch (action.type) {
    case 'chart:FETCH_CHARTS':
      return produce(state, draftState => {
        draftState.loading = true;
        draftState.data = null;
      });

    case 'chart:FETCH_CHARTS_SUCCESS':
      return produce(state, draftState => {
        draftState.data = action.payload.charts;
        draftState.totalStudents = action.payload.totalStudents;
        draftState.loading = false;
      });
    case 'chart:FETCH_CHARTS_FAILURE':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default chart;
