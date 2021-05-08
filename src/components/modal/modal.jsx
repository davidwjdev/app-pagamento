import React from 'react';
import './modal.css';


const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal modal-show" : "modal modal-hide";
  return (
    <div className={showHideClassName}>
      <div className="modal-title">
        Pagamento para
        </div>
      <div className="modal-body">
        <input className='user-value-pay' type='number' />
        <select name="cards" className='user-car'>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
        </select>
        <input className="button-pay" type="button" value="Pagar" onClick={handleClose} />
        <input className="button-pay" type="button" value="Cancela" onClick={handleClose} />
      </div>
    </div>
  );
};

export default Modal;

