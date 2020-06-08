import React from 'react';
import ItemResult from '../ItemResult';
import './styles.css';

const Search = () => {

  return (
    <div className="Search">
      <div className="Search__void"></div>

      <div className="Search__section">
        <div className="Search__header">
          <div className="Search__title">
            <button>
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