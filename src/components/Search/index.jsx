import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import btnSearchAction from '../../Actions/btnSearchAction';
import ItemResult from '../ItemResult';
import './styles.css';

const Search = () => {
  const products = useSelector((state) => state.products);
  const btnSearch = useSelector((state) => state.btnSearch);
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);

  function onClickBack() {
    dispatch(btnSearchAction('hidden'));
  }

  function getResults(event) {
    event.preventDefault();
    let txt = event.target.value.toUpperCase();

    products.forEach(element => {
      if (txt.length >= 2) {
        if (element.name.indexOf(txt) > -1) {
          setItems([...items, element])
        }
      }
    });

    document.getElementsByClassName('Search__body')[0].innerHTML = '';
  }

  return (
    <div className="Search" style={{ visibility: btnSearch }}>
      <div className="Search__void" onClick={ onClickBack }></div>

      <div className="Search__section">
        <div className="Search__header">
          <div className="Search__title">
            <button onClick={ onClickBack }>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </button>
            <span>Pesquisar</span>
          </div>
          <div className="Search__search">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="O que você deseja encontrar?"
              onChange={ getResults }
              autoComplete="off"
            />
          </div>
        </div>
        <div className="Search__body">
          {
            items.map(product => 
              <ItemResult
                key={ products.indexOf(product) }
                product={ product }
              />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Search;