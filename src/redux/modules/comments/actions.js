export const fetchMenuComments = (id, skip, limit) => {
  return {
    type: 'menu:FETCH_MENU_COMMENTS',
    payload: { id, skip, limit },
  };
};

export const fetchMenuCommentsSuccess = (comments, totalComments) => {
  return {
    type: 'menu:FETCH_MENU_COMMENTS_SUCCESS',
    payload: { comments, totalComments },
  };
};

export const fetchMenuCommentsFailure = () => {
  return {
    type: 'menu:FETCH_MENU_COMMENTS_FAILURE',
  };
};
