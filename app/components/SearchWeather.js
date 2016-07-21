/**
 * @fileOverview Компонент поиска погоды
 * @author Dmitry Meshcheryakov (dmitri.meshcheryakov@gmail.com)
 */

import React from 'react';
const PropTypes = React.PropTypes;

export default function SearchWeather(props) {
  return (
    <form className = {props.class} onSubmit = {props.onSubmitCity}>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Novosibirsk"
          onChange = {props.onUpdateCity}
          value = {props.city}
          autoFocus />
      </div>
      <div className="form-group">
        <button className="btn btn-success" type="submit">Get Weather</button>
      </div>
    </form>
  );
}

SearchWeather.propTypes = {
  class: PropTypes.string,
  city: PropTypes.string.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  onSubmitCity: PropTypes.func.isRequired
};
