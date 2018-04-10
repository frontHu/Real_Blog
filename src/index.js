import React from 'react';
import ReactDOM from 'react-dom';
import router from "./router/router";
import { Router, hashHistory } from "react-router";
import store from "./redux/until/configStore";
import { Provider } from 'react-redux';

 
ReactDOM.render(
  <Provider store={store}>
    <Router routes={router} history={hashHistory} />
  </Provider>, 
  document.getElementById('root')
);
