import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import state from './redux/state'


// let dialogs = [
//   { id: 1, name: 'Natalia' },
//   { id: 2, name: 'Vlad' },
//   { id: 3, name: 'Viktor' },
//   { id: 4, name: 'Gleb' },
//   { id: 5, name: 'Anfisa' },
//   { id: 6, name: 'Irina' },
//   { id: 7, name: 'Ruskan' },
// ]
// let messages = [
//   { id: 1, message: "Hello." },
//   { id: 2, message: "How are you?" },
//   { id: 3, message: "Learn React?" },
//   { id: 4, message: "And Redux?" },
//   { id: 5, message: "Yo!" },
// ]
// let posts = [
//   {id: 1, post: "Hello, how are you?", likecounts: 11 },
//   {id: 2, post: "It`s my first post", likecounts: 23 }
// ]
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
