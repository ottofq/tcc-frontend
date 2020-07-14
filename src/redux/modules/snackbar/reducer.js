const initialState = {
  message: '',
  type: '',
  isOpen: false,
};

const snackbar = (state = initialState, action) => {
  switch (action.type) {
    case 'snackbar:SNACKBAR_SUCCESS':
      return {
        ...state,
        isOpen: true,
        type: 'success',
        message: action.payload.message,
      };
    case 'snackbar:SNACKBAR_FAILURE':
      return {
        ...state,
        isOpen: true,
        type: 'error',
        message: action.payload.message,
      };
    case 'snackbar:SNACKBAR_CLEAR':
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default snackbar;
