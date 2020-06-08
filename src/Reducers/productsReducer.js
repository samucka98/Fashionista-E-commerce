const INITIAL_STATE = [];

function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOAD':
      return state = action.payload;

    default:
      return state;
  }
}

export default productsReducer;