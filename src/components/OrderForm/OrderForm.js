import PropTypes from 'prop-types';
import React from 'react';

import API from '../../api/products';

import style from './OrderForm.module.css';

class OrderForm extends React.PureComponent {
  static propTypes = {
    productId: PropTypes.number,
  };

  static defaultProps = {
    productId: null,
  };

  getProduct() {
    const { products } = API;
    const { productId } = this.props;

    return products.find(item => item.id === productId);
  }

  render() {
    const currentProduct = this.getProduct();

    if (!currentProduct) return null;

    return (
      <form className={style.orderForm} method="post">
        <div className={style.orderTitle}>{currentProduct.title}</div>
        <div className={style.orderInfo}>
          <img
            alt={currentProduct.title}
            className={style.orderImg}
            src={currentProduct.img}
          />
          <div className={style.orderPrice}>
            {`${currentProduct.price.toLocaleString('ru-RU')} руб.`}
          </div>
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
    );
  }
}

export default OrderForm;
