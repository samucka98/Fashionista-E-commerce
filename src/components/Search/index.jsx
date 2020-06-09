import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import btnSearchAction from '../../Actions/btnSearchAction';
import ItemResult from '../ItemResult';
import './styles.css';

const Search = () => {
  const btnSearch = useSelector((state) => state.btnSearch);
  const dispatch = useDispatch();

  function onClickBack() {
    dispatch(btnSearchAction('hidden'));
  }

  return (
    <div className="Search" style={{ visibility: btnSearch }}>
      <div className="Search__void" onClick={onClickBack}></div>

      <div className="Search__section">
        <div className="Search__header">
          <div className="Search__title">
            <button onClick={onClickBack}>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </button>
            <span>Pesquisar</span>
          </div>
          <div className="Search__search">
            <input type="search" name="search" id="search" placeholder="O que você deseja encontrar?"/>
          </div>
        </div>
        <div className="Search__body">
          <ItemResult />
          <ItemResult />
          <ItemResult />
          <ItemResult />
          <ItemResult />
          <ItemResult />
          <ItemResult />
        </div>
      </div>
    </div>
  );
}

export default Search;