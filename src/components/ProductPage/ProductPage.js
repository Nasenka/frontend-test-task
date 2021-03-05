import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import API from '../../api/products';

import style from './ProductPage.module.css';

class ProductPage extends React.PureComponent {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { products } = API;
    const { match } = this.props;
    const product = products.find(item => item.id === match.params.id);

    return (
      <>
        <h1 className={style.pageTitle}>{product.title}</h1>
        <div className={style.productDetail}>
          <img
            alt={product.title}
            className={style.productImg}
            src={product.img}
          />
          <div className={style.productInfo}>
            <div className={style.productPrice}>
              {`${product.price.toLocaleString('ru-RU')} руб.`}
            </div>
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
        <div className={style.productDescription}>
          <h2>Описание</h2>
          <p>{product.description}</p>
        </div>
      </>
    );
  }
}

export default ProductPage;
