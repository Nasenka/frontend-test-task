import classnames from 'classnames';
import React from 'react';

import API from '../../api/products';
import Cart from '../Cart/Cart';
import ProductList from '../ProductList';

import style from './App.module.css';

class App extends React.PureComponent {
  state = {
    isOpened: false,
    cartItems: [],
  };

  handleClose = () => {
    this.setState({
      isOpened: false,
    });
  };

  handleCartOpen = () => {
    this.setState({
      isOpened: true,
    });
  };

  handleClickCart = id => {
    this.setState(state => {
      const { cartItems } = state;

      const newCartItems = [...cartItems];
      const cartItemIndex = newCartItems.findIndex(item => item.id === id);

      if (cartItemIndex === -1) {
        newCartItems.push({
          id,
          quantity: 1,
        });
      } else {
        const cartItem = newCartItems[cartItemIndex];

        newCartItems.splice(cartItemIndex, 1, {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        });
      }

      return { cartItems: newCartItems };
    });
  };

  handleRemoveCartItem = id => {
    this.setState(state => {
      const { cartItems } = state;

      const newCartItems = [...cartItems];
      const cartItemIndex = newCartItems.findIndex(item => item.id === id);

      newCartItems.splice(cartItemIndex, 1);

      return { cartItems: newCartItems };
    });
  };

  render() {
    const { products } = API;
    const { isOpened, cartItems } = this.state;
    const quantityCartItems = cartItems.reduce(
      (sum, current) => sum + current.quantity,
      0,
    );

    return (
      <div>
        <div className={style.header}>
          <div className={classnames(style.container, style.containerHeader)}>
            <div className={style.cart}>
              <button
                className={style.cartIcon}
                type="button"
                onClick={this.handleCartOpen}
              >
                <span className={style.countItem}>{quantityCartItems}</span>
              </button>
              <Cart
                cartItems={cartItems}
                isOpened={isOpened}
                products={products}
                onClose={this.handleClose}
                onRemove={this.handleRemoveCartItem}
              />
            </div>
          </div>
        </div>
        <ProductList products={products} onClickCart={this.handleClickCart} />
      </div>
    );
  }
}

export default App;
