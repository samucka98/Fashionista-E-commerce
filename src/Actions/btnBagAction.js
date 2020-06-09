function btnBagAction(value = 'hidden') {
  return {
    type: 'BAG',
    payload: value
  }
}

export default btnBagAction;