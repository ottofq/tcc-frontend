const initialState = {
  token: null,
  isLogged: false,
  loading: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'auth:LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'auth:LOGIN_SUCCESS':
      return {
        ...state,
        token: action.payload.token,
        isLogged: true,
        loading: false,
      };
    case 'auth:LOGIN_FAILURE':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default auth;
