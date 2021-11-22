import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux"
import { createStore, appplyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import reducers from "./reducers"


import App from './App';
import { applyMiddleware } from 'redux';


const store = createStore( reducers, compose( applyMiddleware( thunk ) ) )

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById( 'root' )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

