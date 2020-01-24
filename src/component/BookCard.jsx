import React from "react"
import Modal from "./Modal"
import { BrowserRouter as Router } from "react-router-dom";


class BookCard extends React.Component {
    // const {image ,title,author,published} = this.props;
    constructor(props){
    super(props)
    this.state = { show: false }
    }
    
  
    showModal = () => {
      this.setState({ show: true });
      console.log("show modal")
    }
    
    hideModal = () => {
      this.setState({ show: false });
      console.log("show hide modal")
    }

    render(){
     return (
        <div className="card_container">
            <img src={this.props.image} alt="" />
            <div className="desc">
                <h2>{this.props.title}</h2>
                <h3>{this.props.author}</h3>
                <p>{this.props.published}</p>
                 <div className="modal_area">
                <Router>
                    <Modal show={this.state.show} handleClose={this.hideModal} >
                        <img src={this.props.image} alt="" />
                        <div className="desc">
                            <h2>{this.props.title}</h2>
                            <h3>{this.props.author}</h3>
                            <p>{this.props.published}</p>
                            <p>{this.props.description}</p>
                        </div>
                    </Modal>
                </Router>
                <button type='button' onClick={this.showModal}>Open</button>
            </div>
            </div>
        </div>
    )
}
}

export default BookCard;