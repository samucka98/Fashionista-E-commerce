export function addItem(item) {
  return {
    type: 'ADD',
    payload: item
  }
}

export function removeItem(nameItem) {
  return {
    type: 'REMOVE',
    payload: nameItem
  }
}

export function incrementItem(itemQtd) {
  return {
    type: 'INCREMENT',
    payload: itemQtd + 1
  }
}

export function decrementItem(itemQtd) {
  return {
    type: 'DECREMENT',
    payload: itemQtd - 1
  }
}