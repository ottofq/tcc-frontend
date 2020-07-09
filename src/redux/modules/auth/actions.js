export const loginRequest = (email, password, history) => {
  return {
    type: 'auth:LOGIN_REQUEST',
    payload: { email, password, history },
  };
};

export const loginSuccess = (user, token) => {
  return {
    type: 'auth:LOGIN_SUCCESS',
    payload: { user, token },
  };
};

export const loginFailure = () => {
  return {
    type: 'auth:LOGIN_FAILURE',
  };
};
