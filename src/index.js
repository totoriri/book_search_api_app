import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WannaRead from "./component/WannaRead"
// import AlreadyRead from "./component/Book"
import {BrowserRouter,Route,Switch} from "react-router-dom"


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/wannaRead" component={WannaRead} />
            {/* <Route exact path="/alreadyRead" component={AlreadyRead} /> */}
        </Switch>
      </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
