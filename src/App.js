import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import productsReducer from './Store/Products/Reducers/productsReducer';
import productReducer from './Store/Products/Reducers/productReducer';
import btnSearchReducer from './Store/Search/Reducers/btnSearchReducer';

import Routes from './Routes';


const App = () => {
  const allReducers = combineReducers({
    products: productsReducer,
    product: productReducer,
    btnSearch: btnSearchReducer
  });

  const store = createStore(allReducers, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
