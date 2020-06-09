const INITIAL_STATE = 'hidden';

function btnBagReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'BAG':
      return state = action.payload;

    default:
      return state;
  }
}

export default btnBagReducer;