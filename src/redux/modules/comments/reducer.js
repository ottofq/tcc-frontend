/* eslint-disable no-param-reassign */
import produce from 'immer';

const intialState = {
  data: [],
  totalComments: 0,
  loading: false,
  skip: 0,
  limit: 10,
};

const menu = (state = intialState, action) => {
  switch (action.type) {
    case 'menu:FETCH_MENU_COMMENTS':
      return {
        ...state,
        skip: action.payload.skip,
        limit: action.payload.limit,
        loading: true,
      };
    case 'menu:FETCH_MENU_COMMENTS_SUCCESS':
      return produce(state, draftState => {
        draftState.data = action.payload.comments;
        draftState.totalComments = action.payload.totalComments;
        draftState.loading = false;
      });
    case 'menu:FETCH_MENU_COMMENTS_FAILURE':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default menu;
