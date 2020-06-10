import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { persistStateInLocalStorage } from '../../Store/save';
import { addItem, incrementItem } from '../../Actions/BagAction';
import imgErr from '../../assets/error.jpg';
import './styles.css';

const Section = () => {
  const radios = document.getElementsByClassName('szs');
  const product = useSelector((state) => state.product);
  const bag = useSelector((state) => state.bag);
  const dispatch = useDispatch();

  persistStateInLocalStorage("Fashionista@Product", product);

  function getSizeValue() {
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked === true) {
        return radios[i].value;
      }
    }
    return false;
  }

  function getValueCash() {
    let cash = product.actual_price.replace('R$', '').trim().replace(',','.');
    return Number(cash);
  }

  /**
   * função onValidAdd
   * Valida a adição de novos itens à sacola
   * 
   * para adicionar um novo item o tamanho deve ser diferente caso seja o mesmo item
   * caso o item tenha tamanhos iguais este tera a sua quantidade incrementada em mais um.
   */
  function onValidAdd(item) {
    let add = true;
    for (let i = 0; i < bag.length; i++) {
      if (item.name === bag[i].name && item.size === bag[i].size) {
        return false;
      }
    }
    return add;
  }

  function addItemBag() {
    let item = {
      qtd: 1,
      name: product.name,
      image: product.image,
      price: product.actual_price,
      installments: product.installments,
      valueCash: getValueCash(),
      size: getSizeValue()
    }

    console.log(item);

    // Desenvolver um span para esta mensagem e disparar ele com um setInterval
    if (item.size === false) alert('Opssss escolha um tamanho!');
    else {
      if (onValidAdd(item)) {
        dispatch(addItem(item));
      } else {
        dispatch(incrementItem(item.name, 1));
      }
    }
  }

  return (
    <section>
      <div className="Section__image">
        <img src={ product.image ? product.image : imgErr } alt="image_load_error"/>
      </div>

      <div className="Section__infos">
        <div className="Section__name">{ product.name }</div>

        <div className="Section__price">
          <span className="Section__priceAct">{ product.actual_price }</span>
          <span className="Section__installments">{ product.installments }</span>
        </div>

        <div className="Section__size">Escolha o tamanho</div>

        <div className="Section__selectSize">
          {
            product.sizes.map(size =>
              size.available ? (
                <div key={ product.sizes.indexOf(size) } className="Section__radio">
                  <input className="szs" type="radio" name="size" value={ size.size }/>
                  <label htmlFor={ size.size }>{ size.size }</label>
                </div>
              ) : undefined
            )
          }
        </div>

        <button className="Section__add" onClick={ addItemBag }>Adicionar à sacola</button>
      </div>
    </section>
  );
}

export default Section;