const INITIAL_STATE = {
  name: '',
  image: '',
  regular_price: '',
  actual_price: '',
  discount_percentage: '',
  installments: ''
}

function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SELECTED':
      return state = action.payload;

    default:
      return state;
  }
}

export default productReducer;