/**
 * @fileOverview Компонент детального прогноза погоды
 * @author Dmitry Meshcheryakov (dmitri.meshcheryakov@gmail.com)
 */

import React from 'react';
import Loading from './Loading';
const PropTypes = React.PropTypes;

export default function Detail(props) {
  return (
    props.isLoading === true
    ? <Loading />
    : <div className="text-center">
        <div className="title-wrapper">
          <h1 className="title">{props.header}</h1>
          <img src={props.weather.weather[0].icon} height="55"/>
        </div>
        <ul className="list">
          <li className="list__item">{props.weather.dt}</li>
          <li className="list__item">{props.weather.weather[0].description}</li>
          <li className="list__item">Min. temperature: {props.weather.temp.min} &deg;C</li>
          <li className="list__item">Max. temperature: {props.weather.temp.max} &deg;C</li>
          <li className="list__item">Humidity: {props.weather.humidity} %</li>
        </ul>
      </div>
  );
}

Detail.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
  weather: PropTypes.object.isRequired
};
