// const INITIAL_STATE = {
//   name: '',
//   image: '',
//   regular_price: '',
//   actual_price: '',
//   discount_percentage: '',
//   installments: ''
// }

function productReducer(state = {}, action) {
  switch (action.type) {
    case 'SELECTED':
      return state = action.payload;

    default:
      return state;
  }
}

export default productReducer;