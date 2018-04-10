import React from 'react';
import ReactDOM from 'react-dom';
import router from "./router/router";
import { Router, hashHistory } from "react-router";

ReactDOM.render(
  <Router routes={router} history={hashHistory} />, 
  document.getElementById('root')
);
