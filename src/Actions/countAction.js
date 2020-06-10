export const incrementAction = function() {
  return {
    type: 'INCREMENT_COUNT',
    payload: 1
  }
}

export const decrementAction = function() {
  return {
    type: 'DECREMENT_COUNT',
    payload: 1
  }
}