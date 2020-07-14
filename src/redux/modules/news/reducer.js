/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import produce from 'immer';

const intialState = {
  data: { titulo: '', descricao: '', data: '' },
  list: [],
  total: 0,
  page: 1,
  loadingData: false,
  loadingEdit: false,
  loadingDelete: false,
};

const news = (state = intialState, action) => {
  switch (action.type) {
    case 'news:FETCH_NEWS':
      return produce(state, draftState => {
        draftState.page = action.payload.page;
        draftState.loadingData = true;
      });

    case 'news:FETCH_NEWS_SUCCESS':
      return produce(state, draftState => {
        draftState.list = action.payload.news;
        draftState.total = action.payload.total;
        draftState.loadingData = false;
      });
    case 'news:FETCH_NEWS_FAILURE':
      return {
        ...state,
        loadingData: false,
      };
    case 'news:FETCH_ONE_NEWS':
      return {
        ...state,
        loadingData: true,
      };
    case 'news:FETCH_ONE_NEWS_SUCCESS':
      return {
        ...state,
        data: action.payload.news,
        loadingData: false,
      };
    case 'news:FETCH_ONE_NEWS_FAILURE':
      return {
        ...state,
        loadingData: false,
      };
    case 'news:CREATE_NEWS': {
      return {
        ...state,
        loadingData: true,
      };
    }
    case 'news:CREATE_NEWS_SUCCESS': {
      return {
        ...state,
        loadingData: false,
      };
    }
    case 'news:CREATE_NEWS_FAILURE': {
      return {
        ...state,
        loadingData: false,
      };
    }
    case 'news:EDIT_NEWS': {
      return {
        ...state,
        loadingEdit: true,
      };
    }
    case 'news:EDIT_NEWS_SUCCESS': {
      return {
        ...state,
        loadingEdit: false,
      };
    }
    case 'news:EDIT_NEWS_FAILURE': {
      return {
        ...state,
        loadingEdit: false,
      };
    }
    case 'news:DELETE_NEWS': {
      return {
        ...state,
        loadingDelete: true,
      };
    }
    case 'news:DELETE_NEWS_SUCCESS': {
      return produce(state, draftState => {
        draftState.list = draftState.list.filter(
          item => item._id !== action.payload.id
        );
        draftState.loadingDelete = false;
      });
    }
    case 'news:DELETE_NEWS_FAILURE': {
      return {
        ...state,
        loadingDelete: false,
      };
    }
    default:
      return state;
  }
};

export default news;
