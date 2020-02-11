import React from "react"
import {Link} from "react-router-dom"
const SearchArea = (props) => {
    const { searchBook,searchHandler,textField } = props;

    return (
        <div>
            <form onSubmit={searchBook} action="">
                <input type="text" onChange={searchHandler} value={textField}  placeholder="    type name..." />
                <input type="submit" name="SUBMIT" />
            </form>

            {/* ここにlinkだとうまくコンポーネントが飛ぶ。なぜだろう？・ */}
            <Link to="/wannaRead">wannaRead</Link>
        </div>
    )
}

export default SearchArea;
