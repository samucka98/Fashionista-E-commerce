export default function contReducer(state = 1, action) {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return state + action.payload;

    case 'DECREMENT_COUNT':
      return state - action.payload;
  
    default:
      return state;
  }
}