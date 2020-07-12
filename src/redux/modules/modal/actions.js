export const fetchModal = () => {
  return {
    type: 'modal:FETCH_MODAL',
  };
};

export const openModal = () => {
  return {
    type: 'modal:OPEN_MODAL',
  };
};

export const closeModal = () => {
  return {
    type: 'modal:CLOSE_MODAL',
  };
};
