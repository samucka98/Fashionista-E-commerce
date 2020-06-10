function searchReducer(state = [], action) {
  switch(action.type) {
    case 'SEARCH':
      return [...state, action.payload];

    case 'CLEAR':
      return state = [];

    default:
      return state;
  }
}

export default searchReducer;