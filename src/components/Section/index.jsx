import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../Actions/BagAction';
import imgErr from '../../assets/error.jpg';
import './styles.css';

const Section = () => {
  const radios = document.getElementsByClassName('szs');
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  function getSize() {
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked === true) {
        return radios[i].value;
      }
    }
    return false;
  }

  // fazer função para o valueCash
  function addItemBag() {
    let item = {
      qtd: 1,
      name: product.name,
      image: product.image,
      price: product.actual_price,
      installments: product.installments,
      valueCash: 100,
      size: getSize()
    }

    // Desenvolver um span para esta mensagem e disparar ele com um setInterval
    if (item.size === false) alert('Opssss escolha um tamanho!');
    dispatch(addItem(item));
  }

  return (
    <section>
      <div className="Section__image">
        <img src={ product.image ? product.image : imgErr } alt="image_load_error"/>
      </div>

      <div className="Section__infos">
        <div className="Section__name">
          { product.name }
        </div>

        <div className="Section__price">
          <span className="Section__priceAct">{ product.actual_price }</span>
          <span className="Section__installments">{ product.installments }</span>
        </div>

        <div className="Section__size">
          Escolha o tamanho
        </div>

        <div className="Section__selectSize">
          {
            product.sizes.map(size =>
              size.available ? (
                <div className="Section__radio">
                  <input className="szs" type="radio" name="size" value={ size.size }/>
                  <label htmlFor={ size.size }>{ size.size }</label>
                </div>
              ) : undefined
            )
          }
        </div>

        <button className="Section__add" type="submit" onClick={ addItemBag }>Adicionar à sacola</button>
      </div>
    </section>
  );
}

export default Section;