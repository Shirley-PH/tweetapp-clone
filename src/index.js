import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reducer from './reducers'
import { createStore } from 'redux';
import middleware from './middleware';

//in this case, we create a store which we will it send by Porvider in APP.js
const store= createStore(reducer, middleware); 
ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>,
  
  document.getElementById('root')
);

