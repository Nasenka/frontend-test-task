import React from 'react';

import style from './Cart.module.css';

class Cart extends React.PureComponent {
  render() {
    return (
      <div className={style.popupCart}>
        <div className={style.cartHead}>Вы добавили в корзину:</div>
        <div className={style.cartBody}>
          <img alt="" className={style.cartImg} src="" />
          <div className={style.cartProductInfo}>
            <span className={style.cartProductDel}>&times;</span>
            <div className={style.cartProductTitle} />
            <div className={style.cartProductPrice} />
          </div>
        </div>
        <button className={style.btnPopupCart} type="button">
          Перейти в корзину
        </button>
      </div>
    );
  }
}

export default Cart;
