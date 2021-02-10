import React from 'react';

import ProductItem from './ProductItem';
import style from './ProductList.module.css';

class ProductList extends React.Component {
  renderProducts() {
    return this.props.products.map((product) => {
      return (
        <ProductItem
          key={product.id}
          src={product.img}
          title={product.title}
          price={product.price}
        />
      );
    });
  }

  render () {
    return (
      <main className={style.productListingWrapper}>
        <div className={style.productList}>
          {this.renderProducts()}
        </div>
      </main>
    );
  }
}

export default ProductList;
