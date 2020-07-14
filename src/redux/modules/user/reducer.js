/* eslint-disable no-underscore-dangle */
const initialState = {
  id: null,
  nome: null,
  email: null,
  loading: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'auth:LOGIN_SUCCESS':
      return {
        ...state,
        id: action.payload.user._id,
        nome: action.payload.user.nome,
        email: action.payload.user.email,
      };
    case 'auth:LOGOUT':
      return {
        ...state,
        id: null,
        nome: null,
        email: null,
      };
    case 'user:EDIT_NAME':
      return {
        ...state,
        loading: true,
      };

    case 'user:EDIT_NAME_SUCCESS':
      return {
        ...state,
        loading: false,
        nome: action.payload.nome,
      };
    case 'user:EDIT_NAME_FAILURE':
      return {
        ...state,
        loading: false,
      };
    case 'user:EDIT_NAME_PASS':
      return {
        ...state,
        loading: true,
      };

    case 'user:EDIT_NAME_PASS_SUCCESS':
      return {
        ...state,
        loading: false,
      };
    case 'user:EDIT_NAME_PASS_FAILURE':
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default user;
