export const snackBarSuccess = message => {
  return {
    type: 'snackbar:SNACKBAR_SUCCESS',
    payload: { message },
  };
};

export const snackBarFailure = message => {
  return {
    type: 'snackbar:SNACKBAR_FAILURE',
    payload: { message },
  };
};

export const clearSnackbar = () => {
  return { type: 'snackbar:SNACKBAR_CLEAR' };
};
