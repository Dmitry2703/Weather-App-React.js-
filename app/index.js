import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/es6/promise';
import 'element-closest';
import {routes} from './config/routes';
import './main.css';

ReactDOM.render(
  routes,
  document.querySelector('#app')
);
