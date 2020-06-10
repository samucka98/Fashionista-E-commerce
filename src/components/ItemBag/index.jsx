import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, incrementItem, decrementItem } from '../../Actions/BagAction';
import './styles.css';

const ItemBag = ({ item }) => {
  const dispatch = useDispatch();

  function rmItem() {
    dispatch(removeItem(item.name));
  }

  function inctItem() {
    dispatch(incrementItem(item.name, item.qtd));
  }

  function decItem() {
    if (item.qtd === 1) {
      rmItem();
    } else {
      dispatch(decrementItem(item.name, item.qtd));
    }
  }

  return (
    <div className="ItemBag">
      <div className="ItemBag__img">
        <img src={ item.image } alt="img_load_error"/>
        <button onClick={rmItem}>remover item</button>
      </div>

      <div className="ItemBag__infos">
        <div className="ItemBag__name">{ item.name }</div>

        <div className="ItemBag__size">Tam: { item.size }</div>
        <div className="ItemBag__incDec">
          <button id="decrement" onClick={decItem}>-</button>
            { item.qtd }
          <button id="increment" onClick={inctItem}>+</button>
        </div>
        <div className="ItemBag__price">{ item.price }</div>
        <div className="ItemBag__installments">{ item.installments }</div>
      </div>
    </div>
  );
}

export default ItemBag;