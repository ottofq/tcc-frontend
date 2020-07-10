export const success = message => {
  return {
    type: 'SNACKBAR_SUCCESS',
    payload: { message },
  };
};

export const failure = message => {
  return {
    type: 'SNACKBAR_FAILURE',
    payload: { message },
  };
};

export const clearSnackbar = () => {
  return { type: 'SNACKBAR_CLEAR' };
};
