import React, { Component }from 'react';
import "./modalPagamento.css"

export default class ModalPagamento extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modalPagamento">
        teste
        <button class="toggle-button" onClick={this.onClose}>
            close
          </button>
      </div>
    );
    }
};
