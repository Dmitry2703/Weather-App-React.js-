/**
 * @fileOverview Компонент детального прогноза погоды для выбранного дня
 * @author Dmitry Meshcheryakov (dmitri.meshcheryakov@gmail.com)
 */

import React from 'react';
const PropTypes = React.PropTypes;

export default function Detail(props) {
  return (
    <div className="text-center">
      <div className="title-wrapper">
        <h1 className="title">{props.header}</h1>
        <img src={props.forecastWeather.weather[0].icon} height="55"/>
      </div>
      <ul className="list">
        <li className="list__item">{props.forecastWeather.dt}</li>
        <li className="list__item">{props.forecastWeather.weather[0].description}</li>
        <li className="list__item">Min. temperature: {props.forecastWeather.temp.min} &deg;C</li>
        <li className="list__item">Max. temperature: {props.forecastWeather.temp.max} &deg;C</li>
        <li className="list__item">Humidity: {props.forecastWeather.humidity} %</li>
      </ul>
    </div>
  );
}

Detail.propTypes = {
  header: PropTypes.string.isRequired,
  forecastWeather: PropTypes.object.isRequired
};
