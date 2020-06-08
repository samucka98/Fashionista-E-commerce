function productsReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD':
      return state = action.payload;

    default:
      return state;
  }
}

export default productsReducer;