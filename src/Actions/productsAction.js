const load = (list) => {
  return {
    type: 'LOAD',
    payload: list
  }
}

const loadItems = () => {
  return (dispatch) => {
    fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
      .then(response => response.json())
      .then(data => dispatch(load(data)));
  }
}

export default loadItems;