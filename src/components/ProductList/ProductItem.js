import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import style from './ProductList.module.css';

class ProductItem extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClickOrder: PropTypes.func.isRequired,
    onClickCart: PropTypes.func.isRequired,
  };

  handleClickOrder = () => {
    const { onClickOrder, id } = this.props;

    onClickOrder(id);
  };

  handleClickCart = () => {
    const { onClickCart, id } = this.props;

    onClickCart(id);
  };

  render() {
    const { id, price, src, title } = this.props;

    return (
      <div className={style.productItem}>
        <img alt={title} className={style.productImg} src={src} />
        <div className={style.productInfo}>
          <h2 className={style.productTitle}>
            <Link to={`/product-${id}`}>{title}</Link>
          </h2>
          <div className={style.productPrice}>
            {`${price.toLocaleString('ru-RU')} руб.`}
          </div>
        </div>
        <div className={style.productOrder}>
          <button
            className={classnames(style.btn, style.btnOrder)}
            type="button"
            onClick={this.handleClickOrder}
          >
            Заказать
          </button>
          <button
            className={classnames(style.btn, style.btnCart)}
            type="button"
            onClick={this.handleClickCart}
          >
            В корзину
          </button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
