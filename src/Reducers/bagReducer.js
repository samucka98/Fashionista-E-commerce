function bagReducer(state = [], action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];

    case 'REMOVE':
      return state.filter(item => item.name !== action.payload );

    case 'INCREMENT':
      return state;

    case 'DECREMENT':
      return state;

    default:
      return state;
  }
}


export default bagReducer;