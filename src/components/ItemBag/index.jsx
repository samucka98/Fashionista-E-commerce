import React from 'react';
import './styles.css';

const image = "https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg";
const name = "VESTIDO TAL E TAL E TAL"
const size = "P";
const price = "R$ 40,00";
const installments = "2x R$ 20,90";
const qtd = 4;

const ItemBag = () => {
  return (
    <div className="ItemBag">
      <div className="ItemBag__img">
        <img src={ image } alt="img_load_error"/>
        <button>remover item</button>
      </div>

      <div className="ItemBag__infos">
        <div className="ItemBag__name">{ name }</div>

        <div className="ItemBag__size">Tam: { size }</div>
        <div className="ItemBag__incDec">
          <button id="decrement">-</button>{ qtd }<button id="increment">+</button>
        </div>
        <div className="ItemBag__price">{ price }</div>
        <div className="ItemBag__installments">{ installments }</div>
      </div>
    </div>
  );
}

export default ItemBag;