import React from 'react';
import "./reset.css";
import './App.scss';
import Header from './component/Header'
import Book from "./component/Book"

function App() {
  return (
    <div className="App">
      <Header />
      <Book />
    </div>
  );
}

export default App;
