export const fetchMenus = page => {
  return {
    type: 'menu:FETCH_MENUS',
    payload: { page },
  };
};

export const fetchMenusSuccess = (menus, total) => {
  return {
    type: 'menu:FETCH_MENUS_SUCCESS',
    payload: { menus, total },
  };
};

export const fetchMenusFailure = () => {
  return {
    type: 'menu:FETCH_MENUS_FAILURE',
  };
};

export const fetchMenu = id => {
  return {
    type: 'menu:FETCH_MENU',
    payload: { id },
  };
};

export const fetchMenuSuccess = menu => {
  return {
    type: 'menu:FETCH_MENU_SUCCESS',
    payload: { menu },
  };
};

export const fetchMenuFailure = () => {
  return {
    type: 'menu:FETCH_MENU_FAILURE',
  };
};

export const fetchMenuAverage = id => {
  return {
    type: 'menu:FETCH_MENU_AVERAGE',
    payload: { id },
  };
};

export const fetchMenuAverageSuccess = average => {
  return {
    type: 'menu:FETCH_MENU_AVERAGE_SUCCESS',
    payload: { average },
  };
};

export const fetchMenuAverageFailure = () => {
  return {
    type: 'menu:FETCH_MENU_AVERAGE_FAILURE',
  };
};

export const createMenu = (
  tipo,
  entrada,
  proteina,
  opcao,
  acompanhamento,
  guarnicao,
  sobremesa,
  history
) => {
  return {
    type: 'menu:CREATE_MENU',
    payload: {
      tipo,
      entrada,
      proteina,
      opcao,
      acompanhamento,
      guarnicao,
      sobremesa,
      history,
    },
  };
};

export const createMenuFailure = () => {
  return {
    type: 'menu:CREATE_MENU_FAILURE',
  };
};
export const createMenuSuccess = () => {
  return {
    type: 'menu:CREATE_MENU_SUCCESS',
  };
};

export const editMenu = (
  id,
  tipo,
  entrada,
  proteina,
  opcao,
  acompanhamento,
  guarnicao,
  sobremesa,
  history
) => {
  return {
    type: 'menu:EDIT_MENU',
    payload: {
      id,
      tipo,
      entrada,
      proteina,
      opcao,
      acompanhamento,
      guarnicao,
      sobremesa,
      history,
    },
  };
};

export const editMenuFailure = () => {
  return {
    type: 'menu:EDIT_MENU_FAILURE',
  };
};
export const editMenuSuccess = () => {
  return {
    type: 'menu:EDIT_MENU_SUCCESS',
  };
};

export const deleteMenu = id => {
  return {
    type: 'menu:DELETE_MENU',
    payload: { id },
  };
};

export const deleteMenuSuccess = id => {
  return {
    type: 'menu:DELETE_MENU_SUCCESS',
    payload: { id },
  };
};

export const deleteMenuFailure = () => {
  return {
    type: 'menu:DELETE_MENU_FAILURE',
  };
};
