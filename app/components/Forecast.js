/**
 * @fileOverview Компонент прогноза погода для выбранного города
 * @author Dmitry Meshcheryakov (dmitri.meshcheryakov@gmail.com)
 */

import React from 'react';
import Loading from './Loading';
import ForecastItem from './ForecastItem';
const PropTypes = React.PropTypes;

export default function Forecast(props) {
  return (
    props.isLoading === true
    ? <Loading />
    : <div className="text-center">
        <div className="title-wrapper">
          <h1 className="title">{props.header}</h1>
          <img src={props.currentWeather} height="55"/>
          <span className="subtitle">{props.currentTemp} &deg;C</span>
        </div>
        <ul className="forecast-list" onClick={props.onDayClick}>
          {props.forecastWeather.map(function(item, index) {
            return (
              <ForecastItem
                key={item.dt}
                icon={props.forecastWeather[index].weather[0].icon}
                date={props.forecastWeather[index].dt} />
            );
          })}
        </ul>
      </div>
  );
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
  currentWeather: PropTypes.string.isRequired,
  currentTemp: PropTypes.number.isRequired,
  onDayClick: PropTypes.func.isRequired,
  forecastWeather: PropTypes.array.isRequired
};
