export const fetchNews = page => {
  return {
    type: 'news:FETCH_NEWS',
    payload: { page },
  };
};

export const fetchNewsSuccess = (news, total) => {
  return {
    type: 'news:FETCH_NEWS_SUCCESS',
    payload: { news, total },
  };
};

export const fetchNewsFailure = () => {
  return {
    type: 'news:FETCH_NEWS_FAILURE',
  };
};

export const fetchOneNews = id => {
  return {
    type: 'news:FETCH_ONE_NEWS',
    payload: { id },
  };
};

export const fetchOneNewsSuccess = news => {
  return {
    type: 'news:FETCH_ONE_NEWS_SUCCESS',
    payload: { news },
  };
};

export const fetchOneNewsFailure = () => {
  return {
    type: 'news:FETCH_ONE_NEWS_FAILURE',
  };
};

export const createNews = (titulo, descricao, history) => {
  return {
    type: 'news:CREATE_NEWS',
    payload: {
      titulo,
      descricao,
      history,
    },
  };
};

export const createNewsFailure = () => {
  return {
    type: 'news:CREATE_NEWS_FAILURE',
  };
};
export const createNewsSuccess = () => {
  return {
    type: 'news:CREATE_NEWS_SUCCESS',
  };
};

export const editNews = (id, titulo, descricao, history) => {
  return {
    type: 'news:EDIT_NEWS',
    payload: {
      id,
      titulo,
      descricao,
      history,
    },
  };
};

export const editNewsFailure = () => {
  return {
    type: 'news:EDIT_NEWS_FAILURE',
  };
};
export const editNewsSuccess = () => {
  return {
    type: 'news:EDIT_NEWS_SUCCESS',
  };
};

export const deleteNews = id => {
  return {
    type: 'news:DELETE_NEWS',
    payload: { id },
  };
};

export const deleteNewsSuccess = id => {
  return {
    type: 'news:DELETE_NEWS_SUCCESS',
    payload: { id },
  };
};

export const deleteNewsFailure = () => {
  return {
    type: 'news:DELETE_NEWS_FAILURE',
  };
};
