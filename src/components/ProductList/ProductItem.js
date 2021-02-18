import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import style from './ProductList.module.css';

class ProductItem extends React.PureComponent {
  static propTypes = {
    price: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { price, src, title } = this.props;

    return (
      <div className={style.productItem}>
        <img alt={title} className={style.productImg} src={src} />
        <div className={style.productInfo}>
          <h2 className={style.productTitle}>{title}</h2>
          <div className={style.productPrice}>
            {`${price.toLocaleString('ru-RU')} руб.`}
          </div>
        </div>
        <div className={style.productOrder}>
          <button
            className={classnames(style.btn, style.btnOrder)}
            type="button"
          >
            Заказать
          </button>
          <button
            className={classnames(style.btn, style.btnCart)}
            type="button"
          >
            В корзину
          </button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
