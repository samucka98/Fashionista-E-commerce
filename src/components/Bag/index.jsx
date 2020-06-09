import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import btnBagAction from '../../Actions/btnBagAction';
import ItemBag from '../ItemBag';
import './styles.css';

const Bag = () => {
  const btnBag = useSelector((state) => state.btnBag);
  const bag = useSelector((state) => state.bag);
  const dispatch = useDispatch();

  function onClickBack() {
    dispatch(btnBagAction('hidden'));
  }

  console.log(bag);

  return (
    <div className="Bag" style={{ visibility: btnBag }}>
      <div className="Bag__void" onClick={ onClickBack }></div>

      <div className="Bag__section">
        <div className="Bag__header">
          <div className="Bag__title">
            <button onClick={ onClickBack }>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </button>

            <span>Sacola ({ bag.legnth ? bag.legnth : 0 })</span>
          </div>
        </div>

        <div className="Bag__body">
          {
            bag.map(item => 
              <ItemBag
                key={ bag.indexOf(item) }
                item={ item }
              />
            )
          }
        </div>

        <div className="Bag__footer">
          Subtotal - { bag ? 1 : 0 }
        </div>
      </div>
    </div>
  );
}

export default Bag;