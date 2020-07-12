export const snackBarSuccess = message => {
  return {
    type: 'SNACKBAR_SUCCESS',
    payload: { message },
  };
};

export const snackBarFailure = message => {
  return {
    type: 'SNACKBAR_FAILURE',
    payload: { message },
  };
};

export const clearSnackbar = () => {
  return { type: 'SNACKBAR_CLEAR' };
};
