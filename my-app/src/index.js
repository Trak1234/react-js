import * as serviceWorker from './serviceWorker';
import  store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


export let rerenderEntireTree = () => {
    ReactDOM.render(
    <BrowserRouter>

        <App state={store.getState()}
         dispatch={store.dispatch.bind(store)}  />

        </BrowserRouter>
        
        
        ,document.getElementById('root')); 
}



rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


