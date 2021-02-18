import PropTypes from 'prop-types';
import React from 'react';

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
  };

  renderProducts() {
    const { products } = this.props;

    return products.map(product => {
      return (
        <ProductItem
          key={product.id}
          price={product.price}
          src={product.img}
          title={product.title}
        />
      );
    });
  }

  render() {
    return (
      <main className={style.productListingWrapper}>
        <div className={style.productList}>{this.renderProducts()}</div>
      </main>
    );
  }
}

export default ProductList;
