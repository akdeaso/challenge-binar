const intialState = {
  loading: false,
  refreshing: false,
  connection: false,
};

const Global = (state = intialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.status,
      };

    case 'SET_REFRESH':
      return {
        ...state,
        refreshing: action.refresh,
      };

    case 'SET_CONNECTION':
      return {
        ...state,
        connection: action.connection,
      };

    default:
      return state;
  }
};

export default Global;
