import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import Bag from '../Bag';
import './styles.css';

const bagItems = 3;

const Nav = () => {
  return (
    <>
      <nav id="Nav">
        <div className="content">
          <Link to="/" className="Nav__logo">
            FASHIONISTA
          </Link>

          <ul className="Nav__menu">
            <li className="Nav__option">
              <button>
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
      <Search handleSearch={() => 'visible'}/>
      <Bag />
    </>
  );
}

export default Nav;