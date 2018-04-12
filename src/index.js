import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import store from './store/store';
import { Provider } from 'react-redux';
import {  BrowserRouter} from 'react-router-dom'

const target = document.getElementById('root');

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>

  </Provider>

),
  target
);
