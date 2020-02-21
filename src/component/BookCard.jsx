import React from "react"
import Modal from "./Modal"
import { Link } from "react-router-dom";


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
            {/* <button type='button' onClick={this.showModal}><img className="top_image" src={this.props.image} alt="" /></button> */}
            <Link onClick={this.showModal}><img className="top_image" src={this.props.image} alt="" /></Link>
            <div className="desc">
                <h1>{this.props.title}</h1>
                <h3 className="author_name">{this.props.author}</h3>
                <div className="modal_area">
                     <Modal show={this.state.show} handleClose={this.hideModal} >
                         <img src={this.props.image} alt="" />
                         <p>{this.props.title}</p>
                         <p>{this.props.author}</p>
                         <p>published:{this.props.published}</p>
                        <p>{this.props.description}</p>
                </Modal>
            </div>
            </div>
        </div>
    )
}
}

export default BookCard;