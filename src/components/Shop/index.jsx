import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import loadItems from '../../Store/Products/Actions/productsAction';
import Item from '../Item';
import './styles.css';

const Shop = () => {

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(loadItems());
    
  });

  return (
    <main className="content">
      <div id="Shop">
        {
          products.map(product => 
            <Item
              key={ products.indexOf(product) }
              product={product}
            />
          )
        }
      </div>
    </main>
  );
}

export default Shop;