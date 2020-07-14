/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import produce from 'immer';

const intialState = {
  data: null,
  list: [],
  total: 0,
  page: 1,
  average: { votos: 0, media: 0 },
  loadingData: false,
  loadingEdit: false,
  loadingDelete: false,
  loadingAverage: false,
};

const menu = (state = intialState, action) => {
  switch (action.type) {
    case 'menu:FETCH_MENUS':
      return produce(state, draftState => {
        draftState.page = action.payload.page;
        draftState.loadingData = true;
      });

    case 'menu:FETCH_MENUS_SUCCESS':
      return produce(state, draftState => {
        draftState.list = action.payload.menus;
        draftState.total = action.payload.total;
        draftState.loadingData = false;
      });
    case 'menu:FETCH_MENUS_FAILURE':
      return {
        ...state,
        loadingData: false,
      };
    case 'menu:FETCH_MENU':
      return {
        ...state,
        loadingData: true,
        loadingAverage: true,
      };
    case 'menu:FETCH_MENU_SUCCESS':
      return {
        ...state,
        data: action.payload.menu,
        loadingData: false,
      };
    case 'menu:FETCH_MENU_FAILURE':
      return {
        ...state,
        loadingData: false,
      };
    case 'menu:FETCH_MENU_AVERAGE':
      return {
        ...state,
        loadingAverage: true,
      };
    case 'menu:FETCH_MENU_AVERAGE_SUCCESS':
      return {
        ...state,
        average: action.payload.average,
        loadingAverage: false,
      };
    case 'menu:FETCH_MENU_AVERAGE_FAILURE':
      return {
        ...state,
        loadingAverage: false,
      };
    case 'menu:CREATE_MENU': {
      return {
        ...state,
        loadingData: true,
      };
    }
    case 'menu:CREATE_MENU_SUCCESS': {
      return {
        ...state,
        loadingData: false,
      };
    }
    case 'menu:CREATE_MENU_FAILURE': {
      return {
        ...state,
        loadingData: false,
      };
    }
    case 'menu:EDIT_MENU': {
      return {
        ...state,
        loadingEdit: true,
      };
    }
    case 'menu:EDIT_MENU_SUCCESS': {
      return {
        ...state,
        loadingEdit: false,
      };
    }
    case 'menu:EDIT_MENU_FAILURE': {
      return {
        ...state,
        loadingEdit: false,
      };
    }
    case 'menu:DELETE_MENU': {
      return {
        ...state,
        loadingDelete: true,
      };
    }
    case 'menu:DELETE_MENU_SUCCESS': {
      return produce(state, draftState => {
        draftState.list = draftState.list.filter(
          item => item._id !== action.payload.id
        );
        draftState.loadingDelete = false;
      });
    }
    case 'menu:DELETE_MENU_FAILURE': {
      return {
        ...state,
        loadingDelete: false,
      };
    }
    default:
      return state;
  }
};

export default menu;
