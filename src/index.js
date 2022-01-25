import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux"
import counterReducer from './redux-reduces/counter-reducer';

const myStore = createStore(counterReducer);

ReactDOM.render(
  <Provider store={myStore}>
    <App />
    
  </Provider>   
  
  ,
  document.getElementById('root')
);


