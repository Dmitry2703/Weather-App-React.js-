/**
 * @fileOverview Компонент Header
 * @author Dmitry Meshcheryakov (dmitri.meshcheryakov@gmail.com)
 */

import React from 'react';
import SearchWeatherContainer from '../containers/SearchWeatherContainer';

export default function Header() {
  return (
    <div className="header clearfix">
      <div className="col-sm-6">
        <h1 className="header__title">Weather Forecast</h1>
      </div>
      <div className="col-sm-6 text-right">
        <SearchWeatherContainer className="form-inline"/>
      </div>
    </div>
  );
}
