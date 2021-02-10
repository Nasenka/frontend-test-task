import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import style from './ProductList.module.css';

class ProductItem extends React.Component {
  render () {
    return (
      <div className={style.productItem}>
        <img src={this.props.src} alt={this.props.title} className={style.productImg} />
        <div className={style.productInfo}>
          <h2 className={style.productTitle}>{this.props.title}</h2>
          <div className={style.productPrice}>{this.props.price.toLocaleString('ru-RU')} руб.</div>
        </div>
        <div className={style.productOrder}>
          <button className={classnames(style.btn, style.btnOrder)}>Заказать</button>
          <button className={classnames(style.btn, style.btnCart)}>В корзину</button>
        </div>
      </div>
    );
  }
}

ProductItem.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number
}

export default ProductItem;
