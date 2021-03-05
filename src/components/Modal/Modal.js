import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import style from './Modal.module.css';

class Modal extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isOpened: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isOpened: false,
  };

  body = document.querySelector('body');

  container = document.createElement('div');

  componentDidMount() {
    if (!document.getElementById('modal')) {
      this.container.setAttribute('id', 'modal');
      this.body.appendChild(this.container);
    }
  }

  componentWillUnmount() {
    if (document.getElementById('modal')) {
      this.body.removeChild(this.container);
    }
  }

  renderModal() {
    const { children, isOpened, onClose } = this.props;

    if (!isOpened) return null;

    return (
      <div className={style.overlay}>
        <div className={style.popup}>
          <button className={style.close} type="button" onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  }

  render() {
    return ReactDOM.createPortal(this.renderModal(), this.container);
  }
}

export default Modal;
