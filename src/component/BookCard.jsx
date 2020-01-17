import React from "react"
import Modal from "./Modal"

class BookCard extends React.Component {
    // const {image ,title,author,published} = this.props;
    constructor(props){
    super(props)
    this.state = { show: false }
    }
    
  
    showModal = () => {
      this.setState({ show: true });
    }
    
    hideModal = () => {
      this.setState({ show: false });
    }

    render(){
     return (
        <div className="card_container">
            <img src={this.props.image} alt="" />
            <div className="desc">
                <h2>{this.props.title}</h2>
                <h3>{this.props.author}</h3>
                <p>{this.props.published}</p>
                

                <main>
          <h1>React Modal</h1>
          <Modal show={this.state.show} handleClose={this.hideModal} >
            <p>Modal</p>
            <p>Data</p>
          </Modal>
          <button type='button' onClick={this.showModal}>Open</button>
        </main>
            </div>
        </div>
    )
}
}

export default BookCard;