function bagReducer(state = [], action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];

    case 'REMOVE':
      return state.filter(item => !(item.name === action.payload && item.size === action.size));

    case 'INCREMENT':

      state.map(element => (
        element.name === action.name ? element.qtd = action.payload : element.qtd = action.default
      ))

      return state;

    case 'DECREMENT':

      state.map(element => (
        element.name === action.name ? element.qtd = action.payload : element.qtd = action.default
      ))

      return state;

    default:
      return state;
  }
}


export default bagReducer;