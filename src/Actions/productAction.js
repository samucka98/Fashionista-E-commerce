const selectProd = (obj) => {
  return {
    type: 'SELECTED',
    payload: obj
    ||
    {}
  }
}

export default selectProd;