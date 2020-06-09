export function addItem(item = {}) {
  return {
    action: 'ADD',
    payload: item
  }
}

export function removeItem(item = {}) {
  return {
    action: 'REMOVE',
    payload: item
  }
}