export function addItem(item) {
  return {
    type: 'ADD',
    payload: item
  }
}

export function removeItem(nameItem, size) {
  return {
    type: 'REMOVE',
    size,
    payload: nameItem
  }
}

export function incrementItem(nameItem, qtd) {
  return {
    type: 'INCREMENT',
    name: nameItem,
    default: qtd,
    payload: qtd + 1
  }
}

export function decrementItem(nameItem, qtd) {
  return {
    type: 'DECREMENT',
    name: nameItem,
    default: qtd,
    payload: qtd - 1
  }
}