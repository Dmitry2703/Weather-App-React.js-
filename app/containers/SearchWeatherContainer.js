/**
 * @fileOverview Контейнер для компонента поиска погоды
 * @author Dmitry Meshcheryakov (dmitri.meshcheryakov@gmail.com)
 */

import React from 'react';
import SearchWeather from '../components/SearchWeather';
import {helpers} from '../utils/weatherApi';

export default class SearchWeatherContainer extends React.Component {
  /**
   * Класс SearchWeatherContainer
   * @constructor
   * @param  {Object} props
   * @param  {Object} context
   */
  constructor(props, context) {
    super(props);
    context.router;
    this.state = {
      city: ''
    };
    this.handleUpdateCity = this.handleUpdateCity.bind(this);
    this.handleSubmitCity = this.handleSubmitCity.bind(this);
  }

  /**
   * Обработчик ввода данных в поле ввода
   * @param  {Event} evt
   */
  handleUpdateCity(evt) {
    this.setState({
      city: evt.target.value
    });
  }

  /**
   * Обработчик отправки формы
   * @param  {Event} evt
   */
  handleSubmitCity(evt) {
    evt.preventDefault();
    let city = this.state.city;
    if (city.length > 0) {
      this.context.router.push('/forecast/' + city);
    }
  }

  render() {
    return (
      <SearchWeather
        onSubmitCity = {this.handleSubmitCity}
        onUpdateCity = {this.handleUpdateCity}
        city = {this.state.city}
        class = {this.props.className} />
    );
  }
}

SearchWeatherContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};
