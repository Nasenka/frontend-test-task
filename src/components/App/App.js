import classnames from 'classnames';
//import PropTypes from 'prop-types';
import React from 'react';

import API from '../../api/products';
import OrderForm from '../OrderForm';
import ProductList from '../ProductList';
import Cart from '../Cart';

import style from './App.module.css';

class App extends React.Component {
  render () {
    const products = API.products;

    return (
      <div>
        <div className={style.header}>
          <div className={classnames(style.container, style.containerHeader)}>
            <div className={style.cart}></div>
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
