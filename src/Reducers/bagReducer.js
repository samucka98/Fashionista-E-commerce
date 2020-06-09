function bagReducer(state = [], action) {
  switch (action.payload) {
    case 'ADD':
      return [...state, action.payload]

    case 'REMOVE':
      return state.filter(item => item.name !== action.payload );

    default:
      return state;
  }
}


export default bagReducer;