import React from "react"
import SearchArea from "./SearchArea.jsx"
import BookList from "./BookList";
// import request from 'superagent';


class Book extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            textField:"",
        }
    }

    searchBook = (e) => {
        e.preventDefault();
        console.log("check textfield: ", this.state.textField)
        // superagent版。OK！エラーの原因は、thenにparameterを二つ渡してたから（errとres）
        // request
        //     .get("https://www.googleapis.com/books/v1/volumes/")
        //     .query({ q: "picture book"+this.state.textField })
        //     .then((res) => {
        //         console.log("Response: ", res);
        //         console.log(`book title ${res.body.items[1].volumeInfo.title}  `)
        //         this.setState({
        //             // これはdataじゃなくて、resじゃなきゃダメ。この場合。どんな名前を使うかじゃなくて、引数に渡したものをどう内部処理で使うか見たいな方針が重要。
                    
        //             books:[...res.body.items]
        //         })
        //     })
        //     .catch(e => {
        //           console.log(e)
        //         })
      
        // featchに書き換えたバージョン。corsとか、headerを書き加えてるのは、一度corsってエラーが出たから。
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.textField}+"sad"+"picture book"&maxResults=9`, {
            // crossDomain: true,
            method: 'get',
            // headers: {'Content-Type':'application/json'}
        })
            .then(response => response.json())
            .then((res) => {
                console.log("Response: ", res);
                this.setState({
                    // これはdataじゃなくて、resじゃなきゃダメ。この場合。どんな名前を使うかじゃなくて、引数に渡したものをどう内部処理で使うか見たいな方針が重要。
                     books:[...res.items]
                })
                
            })
            .catch(e => {
                  console.log(e)
            })
        
        // featchapiのコードを真似して書き換えてみた。でも結局なんなのかよく分からん
        // request
        // .get(`https://www.googleapis.com/books/v1/volumes?q=` + this.state.textField)
        // .then(response => {
        //   console.log(response)
        // })
        // .catch(e => {
        //   console.log(e)
        // })
        // console.log(this.state.textField);
    }
    searchHandler = (e) => {
        this.setState({
            textField: e.target.value
        })

        // console.log("textfield: ", this.state.textField);
        // console.log("e.target.value:"+e.target.value)
        // console.log(this.state)
        // // なんでここでthis.state.textFieldってやると、[object object]が返ってくるのか分からない。。。
        // console.log("this.state.textField:"+this.state.textField)
    }
    render() {
        return (
            <div className="Book-area">
                <SearchArea searchBook={this.searchBook} searchHandler={this.searchHandler} />
                <BookList books={this.state.books} />
            </div>
        )
    }
}

export default Book;


