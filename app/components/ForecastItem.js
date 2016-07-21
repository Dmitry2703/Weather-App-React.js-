/**
 * @fileOverview Компонент одного дня из прогноза погода для выбранного города
 * @author Dmitry Meshcheryakov (dmitri.meshcheryakov@gmail.com)
 */

import React from 'react';
const PropTypes = React.PropTypes;

export default function ForecastItem(props) {
  return (
    <li className="forecast-list__item">
      <img src={props.icon} height="130" />
      <h2>{props.date}</h2>
    </li>
  );
}

ForecastItem.propTypes = {
  icon: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};
