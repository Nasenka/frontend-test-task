import classnames from 'classnames';
import React from 'react';

import API from '../../api/products';
import Cart from '../Cart';
import OrderForm from '../OrderForm';
import ProductList from '../ProductList';

import style from './App.module.css';

class App extends React.PureComponent {
  render() {
    const { products } = API;

    return (
      <div>
        <div className={style.header}>
          <div className={classnames(style.container, style.containerHeader)}>
            <div className={style.cart} />
          </div>
        </div>
        <ProductList products={products} />
        <OrderForm />
        <Cart />
      </div>
    );
  }
}

export default App;
