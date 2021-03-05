import PropTypes from 'prop-types';
import React from 'react';

import Modal from '../Modal';
import OrderForm from '../OrderForm';

import ProductItem from './ProductItem';
import style from './ProductList.module.css';

class ProductList extends React.Component {
  static propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    onClickCart: PropTypes.func.isRequired,
  };

  state = {
    currentItem: null,
  };

  handleClickOrder = id => {
    this.setState({
      currentItem: id,
    });
  };

  handleClose = () => {
    this.setState({
      currentItem: null,
    });
  };

  renderProducts() {
    const { products, onClickCart } = this.props;

    return products.map(product => {
      return (
        <ProductItem
          key={product.id}
          id={product.id}
          price={product.price}
          src={product.img}
          title={product.title}
          onClickCart={onClickCart}
          onClickOrder={this.handleClickOrder}
        />
      );
    });
  }

  render() {
    const { currentItem } = this.state;

    return (
      <>
        <div className={style.productList}>{this.renderProducts()}</div>
        <Modal isOpened={currentItem !== null} onClose={this.handleClose}>
          <OrderForm productId={currentItem} />
        </Modal>
      </>
    );
  }
}

export default ProductList;
