const initialState = {
  id: null,
  nome: null,
  email: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'auth:LOGIN_SUCCESS':
      return {
        ...state,
        id: action.payload.user._id,
        nome: action.payload.user.nome,
        email: action.payload.user.email,
      };

    default:
      return state;
  }
};

export default auth;
