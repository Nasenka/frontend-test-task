import React from 'react';

import style from './OrderForm.module.css';

class OrderForm extends React.PureComponent {
  render() {
    return (
      <div className={style.popupOrder}>
        <span className={style.orderClose}>&times;</span>
        <div className={style.orderTitle} />
        <form method="post">
          <div className={style.orderInfo}>
            <img alt="" className={style.orderImg} src="" />
            <div className={style.orderPrice} />
          </div>
          <label className={style.popupLabel} htmlFor="comment">
            Комментарий
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <br />к заказу:
          </label>
          <textarea
            className={style.orderTextarea}
            cols="30"
            id="comment"
            name="comment"
            rows="10"
          />
          <label className={style.popupLabel} htmlFor="phone">
            Ваш телефон *:
          </label>
          <input
            className={style.orderInput}
            id="phone"
            name="phone"
            type="text"
          />
          <button className={style.btnPopupOrder} type="submit">
            Отправить
          </button>
        </form>
      </div>
    );
  }
}

export default OrderForm;
