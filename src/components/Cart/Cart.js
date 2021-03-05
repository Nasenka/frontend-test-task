import PropTypes from 'prop-types';
import React from 'react';

import style from './Cart.module.css';

class Cart extends React.PureComponent {
  static propTypes = {
    cartItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        quantity: PropTypes.number,
      }),
    ),
    isOpened: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  static defaultProps = {
    cartItems: [],
    isOpened: false,
  };

  renderCartItems() {
    const { cartItems, products, onRemove } = this.props;

    return cartItems.map(item => {
      const product = products.find(productItem => productItem.id === item.id);
      const totalPriceItem = product.price * item.quantity;

      return (
        <div key={product.id} className={style.cartItem}>
          <img
            alt={product.title}
            className={style.cartImg}
            src={product.img}
          />
          <div className={style.cartProductInfo}>
            <button
              className={style.cartRemoveItem}
              type="button"
              onClick={() => onRemove(product.id)}
            >
              &times;
            </button>
            <div className={style.cartProductTitle}>
              {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
              {product.title} ({item.quantity}&nbsp;шт)
            </div>
            <div className={style.cartProductPrice}>
              {`${totalPriceItem.toLocaleString('ru-RU')} руб.`}
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const { isOpened, cartItems, onClose } = this.props;

    if (!isOpened) return null;

    const isEmpty = cartItems.length === 0;

    return (
      <div className={style.popupCart}>
        <div className={style.cartHead}>
          {isEmpty ? 'Ваша корзина пуста' : 'Вы добавили в корзину:'}
        </div>
        <button className={style.close} type="button" onClick={onClose}>
          &times;
        </button>
        {!isEmpty && (
          <>
            <div className={style.cartList}>{this.renderCartItems()}</div>
            <button className={style.btnPopupCart} type="button">
              Перейти в корзину
            </button>
          </>
        )}
      </div>
    );
  }
}

export default Cart;
