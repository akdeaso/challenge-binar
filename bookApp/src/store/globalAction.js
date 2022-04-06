export const setLoading = status => {
  return {
    type: 'SET_LOADING',
    status,
  };
};

export const setRefresh = refresh => {
  return {
    type: 'SET_REFRESH',
    refresh,
  };
};

export const setConnection = connection => {
  return {
    type: 'SET_CONNECTION',
    connection,
  };
};
