/**
 * @fileOverview Конфигурация роутов
 * @author Dmitry Meshcheryakov (dmitri.meshcheryakov@gmail.com)
 */

import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../containers/Main';
import Home from '../components/Home';
import ForecastContainer from '../containers/ForecastContainer';
import DetailContainer from '../containers/DetailContainer';

export const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='forecast/:city' component ={ForecastContainer} />
      <Route path='detail/:city' component ={DetailContainer} />
    </Route>
  </Router>
);
