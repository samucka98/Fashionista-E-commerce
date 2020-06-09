export function addItem(item) {
  return {
    type: 'ADD',
    payload: item
  }
}

export function removeItem(item) {
  return {
    type: 'REMOVE',
    payload: item
  }
}