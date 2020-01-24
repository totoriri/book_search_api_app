import React from "react"
import "./Modal.scss"
import {Link,Route} from "react-router-dom"
  
  const Modal = ({ handleClose, show ,children}) => {
     const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    const WannaRead = ()=> <h1>wannaread booklist</h1>
    const AlreadyRead= ()=> <h1>alreadyread booklist</h1>
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          {children}
          <button
            onClick={handleClose}
          >
            Close
          </button>
          <Link to="/wannaRead">wannaRead</Link>
          <Link to="/alreadyRead">alreadyRead</Link>
          <Route exact path="/wannaRead" component={WannaRead} />
          <Route exact path="/alreadyRead" component={AlreadyRead} />

        </section>
      </div>
    );
  };
  
export default Modal;