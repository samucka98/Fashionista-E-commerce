import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const ItemResult = ({ product }) => {
  return (
    <Link to="/" className="ItemResult">
      <div className="ItemResult__img">
        <img src={ product.image } alt="load_image_error"/>
      </div>
      <div className="ItemResult__info">
        <div className="ItemResult__name">{ product.name }</div>
        <div className="ItemResult__price">
          <div className="ItemResult__pregular">{ product.regular_price }</div>
          <div className="ItemResult__pactual">{ product.actual_price }</div>
          <div className="ItemResult__installments">{ product.installmets }</div>
        </div>
      </div>
    </Link>
  );
}

export default ItemResult;