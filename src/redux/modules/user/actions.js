export const editName = (id, name, email, pass) => {
  return {
    type: 'user:EDIT_NAME',
    payload: { id, name, email, pass },
  };
};

export const editNameSuccess = name => {
  return {
    type: 'user:EDIT_NAME_SUCCESS',
    payload: { name },
  };
};
export const editNameFailure = () => {
  return {
    type: 'user:EDIT_NAME_FAILURE',
  };
};

export const editNameAndPass = (id, nome, oldPassword, newPassword) => {
  return {
    type: 'user:EDIT_NAME_PASS',
    payload: { id, nome, oldPassword, newPassword },
  };
};

export const editNameAndPassSuccess = () => {
  return {
    type: 'user:EDIT_NAME_PASS_SUCCESS',
  };
};

export const editNameAndPassFailure = () => {
  return {
    type: 'user:EDIT_NAME_PASS_FAILURE',
  };
};
