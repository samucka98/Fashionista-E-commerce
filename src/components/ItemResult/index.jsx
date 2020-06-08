import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const image = 'https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg';
const name = "VESTIDO TRANSPASSE BOW";
const regular_price = "R$ 199,90";
const actual_price = "R$ 199,90";
const installmets = "3x R$ 66,63";

const ItemResult = () => {
  return (
    <Link to="/" className="ItemResult">
      <div className="ItemResult__img">
        <img src={ image } alt="load_image_error"/>
      </div>
      <div className="ItemResult__info">
        <div className="ItemResult__name">{ name }</div>
        <div className="ItemResult__price">
          <div className="ItemResult__pregular">{ regular_price }</div>
          <div className="ItemResult__pactual">{ actual_price }</div>
          <div className="ItemResult__installments">{ installmets }</div>
        </div>
      </div>
    </Link>
  );
}

export default ItemResult;