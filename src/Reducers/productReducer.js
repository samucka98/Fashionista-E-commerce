function productReducer(state = {}, action) {
  switch (action.type) {
    case 'SELECTED':
      return state = action.payload;

    default:
      return state;
  }
}

export default productReducer;