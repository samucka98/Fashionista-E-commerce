function searchReducer(state = [], action) {
  switch(action.type) {
    case 'SEARCH_INDEX':
      return [...state, action.payload];

    case 'CLEAR':
      return state = [];

    default:
      return state;
  }
}

export default searchReducer;