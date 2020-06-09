function btnSearchAction(value = 'hidden') {
  return {
    type: 'SEARCH',
    payload: value
  }
}

export default btnSearchAction;