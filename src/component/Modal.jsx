import React from "react"
import "./Modal.scss"
import {Link} from "react-router-dom"
  
  const Modal = ({ handleClose, show ,children}) => {
     const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          {children}
          <button
            onClick={handleClose}
          >
            Close
          </button>
          {/* なんでsearchareaと違って、ここに書くとうまくコンポーネントが開けないんだろう？？ */}
          <Link to="/wannaRead">wannaRead</Link>
          {/* <Link to="/alreadyRead">alreadyRead</Link> */}
        </section>
      </div>
    );
  };
  
export default Modal;