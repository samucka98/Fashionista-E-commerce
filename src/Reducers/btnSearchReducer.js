const INITIAL_STATE = {
  begin: 'hidden'
}

function btnSearchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SEARCH':
      return state = action.payload;

    default:
      return state;
  }
}

export default btnSearchReducer;