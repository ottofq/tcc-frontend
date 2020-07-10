/* eslint-disable no-underscore-dangle */
const initialState = {
  id: null,
  nome: null,
  email: null,
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

    default:
      return state;
  }
};

export default user;
