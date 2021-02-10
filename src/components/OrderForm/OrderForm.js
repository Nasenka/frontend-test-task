import React from 'react';

import style from './OrderForm.module.css';

class OrderForm extends React.Component {
  render () {
    return (
      <div className={style.popupOrder}>
        <span className={style.orderClose}>&times;</span>
        <div className={style.orderTitle}></div>
        <form method="post">
          <div className={style.orderInfo}>
            <img src="" alt="" className={style.orderImg} />
            <div className={style.orderPrice}></div>
          </div>
          <label className={style.popupLabel} htmlFor="comment">Комментарий<br />к заказу:</label>
          <textarea className={style.orderTextarea} name="comment" id="comment" cols="30" rows="10"></textarea>
          <label className={style.popupLabel} htmlFor="phone">Ваш телефон *:</label>
          <input className={style.orderInput} type="text" id="phone" name="phone" />
          <button type="submit" className={style.btnPopupOrder}>Отправить</button>
        </form>
      </div>
    );
  }
}

export default OrderForm;
