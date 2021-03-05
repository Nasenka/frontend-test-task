import classnames from 'classnames';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import API from '../../api/products';
import Cart from '../Cart/Cart';
import ProductList from '../ProductList';
import ProductPage from '../ProductPage/ProductPage';

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
      <Router>
        <>
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
          <main className={style.productListingWrapper}>
            <Switch>
              <Route exact path="/">
                <ProductList
                  products={products}
                  onClickCart={this.handleClickCart}
                />
              </Route>
              <Route component={ProductPage} path="/product-:id" />
              <Route>
                <h2>404 Page not found</h2>
              </Route>
            </Switch>
          </main>
        </>
      </Router>
    );
  }
}

export default App;
