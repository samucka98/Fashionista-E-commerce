import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import imgErr from '../../assets/error.jpg';
import './styles.css';

const Section = () => {

  const product = useSelector((state) => state.product);
  const bag = useSelector((state) => state.bag);

  const [size, setSize] = useState('');

  function onClickSelectSize(event) {
    setSize(event.target.value);
    console.log(size)
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
                  <input type="radio" name="size" value={size.size}/>
                  <label htmlFor={size.size}>{size.size}</label>
                </div>
              ) : undefined
            )
          }
        </div>

        <button className="Section__add">Adicionar à sacola</button>
      </div>
    </section>
  );
}

export default Section;