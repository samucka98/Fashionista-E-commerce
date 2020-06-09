const INITIAL_STATE = 'hidden';

function btnSearchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SEARCH':
      return state = action.payload;

    default:
      return state;
  }
}

export default btnSearchReducer;