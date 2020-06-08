import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import productsReducer from '../Reducers/productsReducer'
import productReducer from '../Reducers/productReducer';
import btnSearchReducer from '../Reducers/btnSearchReducer';

const SAVED_DATA = "savedData";

function persistState(data) {
  localStorage.setItem(SAVED_DATA, JSON.stringify(data));
}

function loadState() {
  const actualState = localStorage.getItem(SAVED_DATA);
  if (actualState)
    return JSON.parse(actualState);
  else
    return [];
}

const allReducers = combineReducers({
  products: productsReducer,
  product: productReducer,
  btnSearch: btnSearchReducer
});

const store = createStore(allReducers, loadState(), applyMiddleware(thunk));

store.subscribe(() => {
  persistState(store.getState());
})

export default store;