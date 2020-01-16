import React from "react"

const BookCard = (props) => {
    const { image ,title,author,published} = props;
    return (
        <div className="card_container">
            <img src={image} alt="" />
            <div className="desc">
                <h2>{title}</h2>
                <h3>{author}</h3>
                <p>{published}</p>
            </div>
        </div>
    )
}

export default BookCard;