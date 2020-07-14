const initialState = {
  isOpen: false,
  loading: false,
};

const snackbar = (state = initialState, action) => {
  switch (action.type) {
    case 'modal:FECTH_MODAL':
      return {
        ...state,
        loading: true,
      };
    case 'modal:OPEN_MODAL':
      return {
        ...state,
        isOpen: true,
        loading: false,
      };
    case 'modal:CLOSE_MODAL':
      return {
        ...state,
        isOpen: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default snackbar;
