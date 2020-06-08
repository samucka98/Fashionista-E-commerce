import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import selectProd from '../../Store/Products/Actions/productAction';
import imgErr from '../../assets/error.jpg';
import './styles.css';


const Item = ({ product }) => {
  const dispatch = useDispatch();

  function handleSelectedItem() {
    return dispatch(selectProd(product));
  }

  return (
    <Link to="/produto" className="Item" onClick={handleSelectedItem}>
      <div className="Item__image">
        {
          product.discount_percentage ? <div className="Item__selo">-{ product.discount_percentage }</div> : null
        }
        <img src={ product.image ? product.image : imgErr } alt="img_error" />
      </div>
      <div className="Item__footer">
        {
          product.regular_price === product.actual_price
            ? <span className="Item__pricePromo">{ product.actual_price }</span>
            : <>
                <span className="Item__price">{ product.regular_price }</span>
                <span className="Item__pricePromo">{ product.actual_price }</span>
              </>
        }
      </div>
      <span className="Item__priceDiv">Em até { product.installments } sem juros</span>
    </Link>
  );
}

export default Item;