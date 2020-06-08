function btnSearchReducer(state = 'hidden', action) {
  switch (action.type) {
    case 'SEARCH':
      return state = action.payload;

    default:
      return state;
  }
}

export default btnSearchReducer;