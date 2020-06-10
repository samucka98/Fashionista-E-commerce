import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import productsReducer from '../Reducers/productsReducer'
import productReducer from '../Reducers/productReducer';
import bagReducer from '../Reducers/bagReducer';
import searchReducer from '../Reducers/searchReducer';
import btnSearchReducer from '../Reducers/btnSearchReducer';
import btnBagReducer from '../Reducers/btnBagReducer';

const SAVED_DATA = process.env.STATE_LOCAL_STORAGE;

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
  btnSearch: btnSearchReducer,
  btnBag: btnBagReducer,
  bag: bagReducer,
  search: searchReducer
});

const store = createStore(allReducers, loadState(), applyMiddleware(thunk));

store.subscribe(() => {
  persistState(store.getState());
})

export default store;