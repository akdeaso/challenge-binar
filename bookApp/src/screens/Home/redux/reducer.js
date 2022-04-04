const initialState = {
  dataBook: [],
  detailBook: {},
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA_BOOK':
      return {
        ...state,
        dataBook: action.payload,
      };

    case 'DETAIL_BOOK':
      return {
        ...state,
        detailBook: action.payload,
      };

    default:
      return state;
  }
};
export default homeReducer;
