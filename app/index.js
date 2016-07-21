import React from 'react';
import ReactDOM from 'react-dom';
import {routes} from './config/routes';
import './main.css';

ReactDOM.render(
  routes,
  document.querySelector('#app')
);
