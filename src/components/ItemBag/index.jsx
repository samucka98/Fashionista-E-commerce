import React from 'react';
import './styles.css';

const ItemBag = ({ item }) => {
  return (
    <div className="ItemBag">
      <div className="ItemBag__img">
        <img src={ item.image } alt="img_load_error"/>
        <button>remover item</button>
      </div>

      <div className="ItemBag__infos">
        <div className="ItemBag__name">{ item.name }</div>

        <div className="ItemBag__size">Tam: { item.size }</div>
        <div className="ItemBag__incDec">
          <button id="decrement">-</button>{ item.qtd }<button id="increment">+</button>
        </div>
        <div className="ItemBag__price">{ item.price }</div>
        <div className="ItemBag__installments">{ item.installments }</div>
      </div>
    </div>
  );
}

export default ItemBag;