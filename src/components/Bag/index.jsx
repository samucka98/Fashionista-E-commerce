import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import btnBagAction from '../../Actions/btnBagAction';
import ItemBag from '../ItemBag';
import './styles.css';

const items = 3;
const subtotal = "R$ 459,70"

const Bag = () => {
  const btnBag = useSelector((state) => state.btnBag);
  const dispatch = useDispatch();

  function onClickBack() {
    dispatch(btnBagAction('hidden'));
  }

  return (
    <div className="Bag" style={{ visibility: btnBag }}>
      <div className="Bag__void" onClick={onClickBack}></div>

      <div className="Bag__section">
        <div className="Bag__header">
          <div className="Bag__title">
            <button onClick={onClickBack}>
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