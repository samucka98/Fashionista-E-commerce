import React from 'react';
import Nav from '../Nav';
import './styles.css';

const Header = () => {

  function myScroll() {
    window.scrollTo(10, 700)
  }

  return (
    <header className="Header">
      <Nav />
      <div className="Header__info">
        <div className="Header__box">
          <h3 className="Header__name">Fashionista</h3>
          <h4 className="Header__description">Descontos de até 50%</h4>
          <button className="Header__btn" onClick={myScroll}>Ver Estoque</button>
        </div>
      </div>
    </header>
  );
}

export default Header;