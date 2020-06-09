import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import btnSearchAction from '../../Actions/btnSearchAction';
import Search from '../Search';
import Bag from '../Bag';
import './styles.css';

const bagItems = 3;

const Nav = () => {
  const dispatch= useDispatch();
  function onClickSearch() {
    dispatch(btnSearchAction('visible'));
  }

  return (
    <>
      <nav id="Nav">
        <div className="content">
          <Link to="/" className="Nav__logo">
            FASHIONISTA
          </Link>

          <ul className="Nav__menu">
            <li className="Nav__option">
              <button onClick={onClickSearch}>
                <i className="fa fa-search" aria-hidden="true"></i>
                <span>Pesquisar</span>
              </button>
            </li>

            <li className="Nav__option">
              <button>
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                <span>Minhas Compras</span>
                <div className="Nav__qtd">
                  { bagItems }
                </div>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <Search />
      <Bag />
    </>
  );
}

export default Nav;