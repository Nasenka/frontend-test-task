import React from 'react';

import style from './Cart.module.css';

class Cart extends React.Component {
  render () {
    return (
      <div className={style.popupCart}>
        <div className={style.cartHead}>Вы добавили в корзину:</div>
        <div className={style.cartBody}>
          <img src="" alt="" className={style.cartImg} />
          <div className={style.cartProductInfo}>
            <span className={style.cartProductDel}>&times;</span>
            <div className={style.cartProductTitle}></div>
            <div className={style.cartProductPrice}></div>
          </div>
        </div>
        <button className={style.btnPopupCart}>Перейти в корзину</button>
      </div>
    );
  }
}

export default Cart;
