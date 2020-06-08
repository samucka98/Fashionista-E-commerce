import React from 'react';
import ItemBag from '../ItemBag';
import './styles.css';

const items = 3;
const subtotal = "R$ 459,70"

const Bag = () => {
  return (
    <div className="Bag">
      <div className="Bag__void"></div>

      <div className="Bag__section">
        <div className="Bag__header">
          <div className="Bag__title">
            <button>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </button>

            <span>Sacola ({ items })</span>
          </div>
        </div>

        <div className="Bag__body">
          <ItemBag />
          <ItemBag />
          <ItemBag />
        </div>

        <div className="Bag__footer">
          Subtotal - { subtotal }
        </div>
      </div>
    </div>
  );
}

export default Bag;