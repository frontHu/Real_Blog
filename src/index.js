import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/until/configStore";
import { Provider } from 'react-redux';
import App from './page/App/App';
import "./layout.css";
import "./index.css";
import './iconfont/iconfont.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
