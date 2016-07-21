/**
 * @fileOverview Компонент Стартовая страница
 * @author Dmitry Meshcheryakov (dmitri.meshcheryakov@gmail.com)
 */

import React from 'react';
import SearchWeatherContainer from '../containers/SearchWeatherContainer';

export default function Home() {
  return (
    <div className="container">
      <div className="container__inner">
        <div className="banner">Enter a City</div>
        <SearchWeatherContainer />
      </div>
    </div>
  );
}
