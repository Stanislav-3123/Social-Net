import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, newPostText } from './redux/state'



export let rerenderEntireTree = (state) => {

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App 
      newPostText={newPostText}
      state={state} 
      addPost={addPost}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
}

