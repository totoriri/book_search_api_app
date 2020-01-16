import React from "react"

const SearchArea = (props) => {
    const { searchBook,searchHandler,textField } = props;

    return (
        <div>
            <form onSubmit={searchBook} action="">
                <input type="text" onChange={searchHandler} value={textField}  placeholder="    type name..." />
                <input type="submit"　name="SUBMIT"/>
            </form>
        </div>
    )
}

export default SearchArea;
